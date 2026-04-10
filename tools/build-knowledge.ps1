$ErrorActionPreference = "Stop"

function Get-Utf8NoBomEncoding {
  return [System.Text.UTF8Encoding]::new($false)
}

function Read-Utf8File([string] $path) {
  return [System.IO.File]::ReadAllText($path, (Get-Utf8NoBomEncoding))
}

function Write-Utf8File([string] $path, [string] $content) {
  $dir = Split-Path -Parent $path
  if (-not (Test-Path -LiteralPath $dir)) {
    New-Item -ItemType Directory -Path $dir | Out-Null
  }
  [System.IO.File]::WriteAllText($path, $content, (Get-Utf8NoBomEncoding))
}

function Normalize-MetaLine([string] $line) {
  $t = $line.Trim()
  if ($t.StartsWith(">")) {
    $t = $t.Substring(1).TrimStart()
  }
  # For meta lines only: drop leading emoji/symbols/variation selectors for stability.
  $t = ($t -replace '^[\p{S}\p{Cs}\p{Mn}]+\s*', '')
  $t = ($t -replace '\s{2,}$', '')
  return $t
}

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$inputPath = Join-Path $root "八年级一册知识点.md"
$outputPath = Join-Path $root "data\\knowledge.js"

if (-not (Test-Path -LiteralPath $inputPath)) {
  throw "Input not found: $inputPath"
}

$raw = Read-Utf8File $inputPath

$docTitle = "知识点目录"
$meta = New-Object System.Collections.Generic.List[string]

$themes = New-Object System.Collections.Generic.List[object]
$currentTheme = $null
$currentTopic = $null
$currentLesson = $null

$themeIndex = 0
$topicIndex = 0
$lessonIndex = 0

$collectMeta = $false

foreach ($line in ($raw -split "\r?\n")) {
  if ($line -match '^#\s+(.+)$' -and $docTitle -eq "知识点目录") {
    $docTitle = $Matches[1].Trim()
    $collectMeta = $true
    continue
  }

  if ($collectMeta) {
    if ($line -match '^\s*>\s*') {
      $normalized = Normalize-MetaLine $line
      if ($normalized) { $meta.Add($normalized) | Out-Null }
      continue
    }

    if ($line -match '^\s*---\s*$' -or $line -match '^##\s+') {
      $collectMeta = $false
      # fall through and keep parsing headings on the same line
    } else {
      continue
    }
  }

  if ($line -match '^##\s+(.+)$') {
    $themeIndex++
    $topicIndex = 0
    $lessonIndex = 0
    $currentLesson = $null

    $currentTheme = [ordered]@{
      id = "t$themeIndex"
      title = $Matches[1].Trim()
      topics = New-Object System.Collections.Generic.List[object]
    }
    $themes.Add($currentTheme) | Out-Null
    $currentTopic = $null
    continue
  }

  if ($line -match '^###\s+(.+)$') {
    if ($null -eq $currentTheme) { continue }
    $topicIndex++
    $lessonIndex = 0
    $currentLesson = $null

    $currentTopic = [ordered]@{
      id = "t$themeIndex" + "_s$topicIndex"
      title = $Matches[1].Trim()
      lessons = New-Object System.Collections.Generic.List[object]
    }
    $currentTheme.topics.Add($currentTopic) | Out-Null
    continue
  }

  if ($line -match '^####\s+(.+)$') {
    if ($null -eq $currentTopic) { continue }
    $lessonIndex++

    $lesson = [ordered]@{
      id = "t$themeIndex" + "_s$topicIndex" + "_l$lessonIndex"
      title = $Matches[1].Trim()
      md = ""
    }

    $currentTopic.lessons.Add($lesson) | Out-Null
    $currentLesson = $lesson
    continue
  }

  if ($null -ne $currentLesson) {
    # Preserve lesson body markdown; normalize line endings to "\n".
    $currentLesson.md += ($line + "`n")
  }
}

$doc = [ordered]@{
  title = $docTitle
  meta = $meta
  themes = $themes
}

$json = $doc | ConvertTo-Json -Depth 30
$js = @"
// Auto-generated from 八年级一册知识点.md by tools/build-knowledge.ps1
// Encoding: UTF-8 (no BOM)
module.exports = $json;
"@

Write-Utf8File $outputPath $js
Write-Host "Generated: $outputPath"
