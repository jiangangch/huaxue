var knowledge = require('../../data/knowledge');

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInline(raw) {
  var source = String(raw || '');
  var out = '';
  var i = 0;

  while (i < source.length) {
    var boldStart = source.indexOf('**', i);
    var codeStart = source.indexOf('`', i);
    var next = -1;
    var kind = '';

    if (boldStart !== -1 && (codeStart === -1 || boldStart < codeStart)) {
      next = boldStart;
      kind = 'bold';
    } else if (codeStart !== -1) {
      next = codeStart;
      kind = 'code';
    }

    if (next === -1) {
      out += escapeHtml(source.slice(i));
      break;
    }

    out += escapeHtml(source.slice(i, next));

    if (kind === 'bold') {
      var boldEnd = source.indexOf('**', next + 2);
      if (boldEnd === -1) {
        out += escapeHtml(source.slice(next));
        break;
      }
      out += '<strong style="color:#0f3f94; font-weight:700;">' + escapeHtml(source.slice(next + 2, boldEnd)) + '</strong>';
      i = boldEnd + 2;
      continue;
    }

    if (kind === 'code') {
      var codeEnd = source.indexOf('`', next + 1);
      if (codeEnd === -1) {
        out += escapeHtml(source.slice(next));
        break;
      }
      out += '<code style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace; color:#0f172a; background:#f1f5f9; padding:2px 6px; border-radius:6px; font-size:24rpx;">' +
        escapeHtml(source.slice(next + 1, codeEnd)) +
        '</code>';
      i = codeEnd + 1;
      continue;
    }
  }

  return out;
}

function markdownToHtml(md, depth) {
  var level = typeof depth === 'number' ? depth : 0;
  if (!md) return '';
  if (level > 3) return '<p style="margin:0 0 16px 0; color:#1f2937; line-height:1.85; font-size:29rpx;">' + escapeHtml(md) + '</p>';

  var lines = String(md).replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  var html = [];
  var idx = 0;

  while (idx < lines.length) {
    var rawLine = lines[idx];
    var line = rawLine == null ? '' : String(rawLine);

    if (/^\s*$/.test(line)) {
      idx++;
      continue;
    }

    if (/^\s*---\s*$/.test(line)) {
      html.push('<hr style="border:none;border-top:1px solid #d9e2ef;margin:20px 0;" />');
      idx++;
      continue;
    }

    if (/^\s*>/.test(line)) {
      var quoteLines = [];
      while (idx < lines.length && /^\s*>/.test(lines[idx])) {
        quoteLines.push(String(lines[idx]).replace(/^\s*>\s?/, ''));
        idx++;
      }
      html.push('<blockquote style="margin:0 0 16px 0;padding:12px 14px;border-left:4px solid #0b3d91;background:#f5f9ff;border-radius:12px; color:#334155; line-height:1.8; font-size:28rpx;">' +
        markdownToHtml(quoteLines.join('\n'), level + 1) +
        '</blockquote>');
      continue;
    }

    if (/^\s*-\s+/.test(line)) {
      var listItems = [];
      while (idx < lines.length && /^\s*-\s+/.test(lines[idx])) {
        listItems.push(String(lines[idx]).replace(/^\s*-\s+/, ''));
        idx++;
      }
      var liHtml = '';
      for (var i = 0; i < listItems.length; i++) {
        liHtml += '<li style="margin:0 0 9px 0; color:#1f2937; line-height:1.8; font-size:29rpx;">' + renderInline(listItems[i]) + '</li>';
      }
      html.push('<ul style="padding-left:20px;margin:0 0 16px 0;">' + liHtml + '</ul>');
      continue;
    }

    var paragraph = [];
    while (idx < lines.length) {
      var pLine = String(lines[idx] == null ? '' : lines[idx]);
      if (/^\s*$/.test(pLine)) break;
      if (/^\s*---\s*$/.test(pLine)) break;
      if (/^\s*>/.test(pLine)) break;
      if (/^\s*-\s+/.test(pLine)) break;
      paragraph.push(pLine);
      idx++;
    }

    var paragraphHtml = '';
    for (var j = 0; j < paragraph.length; j++) {
      if (j > 0) paragraphHtml += '<br />';
      paragraphHtml += renderInline(paragraph[j].trim());
    }
    html.push('<p style="margin:0 0 16px 0; color:#1f2937; line-height:1.85; font-size:29rpx;">' + paragraphHtml + '</p>');
  }

  return html.join('');
}

function findLessonById(lessonId) {
  var themes = (knowledge && knowledge.themes) || [];
  for (var i = 0; i < themes.length; i++) {
    var theme = themes[i];
    var topics = (theme && theme.topics) || [];
    for (var j = 0; j < topics.length; j++) {
      var topic = topics[j];
      var lessons = (topic && topic.lessons) || [];
      for (var k = 0; k < lessons.length; k++) {
        var lesson = lessons[k];
        if (lesson && lesson.id === lessonId) {
          return { theme: theme, topic: topic, lesson: lesson };
        }
      }
    }
  }
  return null;
}

Page({
  data: {
    title: '',
    breadcrumb: '',
    html: '',
    error: ''
  },

  onLoad: function (options) {
    var lessonId = (options && options.id) || '';
    var found = findLessonById(lessonId);

    if (!lessonId || !found) {
      this.setData({
        error: '未找到对应课题内容，请从首页目录进入。'
      });
      return;
    }

    var md = (found.lesson && found.lesson.md) || '';
    var html = markdownToHtml(String(md).trim(), 0);

    this.setData({
      title: found.lesson.title || '课题详情',
      breadcrumb: String(found.theme.title || '') + ' / ' + String(found.topic.title || ''),
      html: html,
      error: ''
    });
  }
});
