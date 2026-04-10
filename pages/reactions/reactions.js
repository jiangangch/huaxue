const ELEMENT_LIST = [
  { symbol: "H", name: "\u6c22", atomicNumber: 1, maxGain: 1, maxLoss: 1 },
  { symbol: "He", name: "\u6c26", atomicNumber: 2, maxGain: 0, maxLoss: 0 },
  { symbol: "Li", name: "\u9502", atomicNumber: 3, maxGain: 0, maxLoss: 1 },
  { symbol: "Be", name: "\u94cd", atomicNumber: 4, maxGain: 0, maxLoss: 2 },
  { symbol: "B", name: "\u787c", atomicNumber: 5, maxGain: 0, maxLoss: 3 },
  { symbol: "C", name: "\u78b3", atomicNumber: 6, maxGain: 0, maxLoss: 4 },
  { symbol: "N", name: "\u6c2e", atomicNumber: 7, maxGain: 3, maxLoss: 0 },
  { symbol: "O", name: "\u6c27", atomicNumber: 8, maxGain: 2, maxLoss: 0 },
  { symbol: "F", name: "\u6c1f", atomicNumber: 9, maxGain: 1, maxLoss: 0 },
  { symbol: "Ne", name: "\u6c16", atomicNumber: 10, maxGain: 0, maxLoss: 0 },
  { symbol: "Na", name: "\u94a0", atomicNumber: 11, maxGain: 0, maxLoss: 1 },
  { symbol: "Mg", name: "\u9541", atomicNumber: 12, maxGain: 0, maxLoss: 2 },
  { symbol: "Al", name: "\u94dd", atomicNumber: 13, maxGain: 0, maxLoss: 3 },
  { symbol: "Si", name: "\u7845", atomicNumber: 14, maxGain: 0, maxLoss: 4 },
  { symbol: "P", name: "\u78f7", atomicNumber: 15, maxGain: 3, maxLoss: 0 },
  { symbol: "S", name: "\u786b", atomicNumber: 16, maxGain: 2, maxLoss: 0 },
  { symbol: "Cl", name: "\u6c2f", atomicNumber: 17, maxGain: 1, maxLoss: 0 },
  { symbol: "Ar", name: "\u6c29", atomicNumber: 18, maxGain: 0, maxLoss: 0 },
  { symbol: "K", name: "\u94be", atomicNumber: 19, maxGain: 0, maxLoss: 1 },
  { symbol: "Ca", name: "\u9499", atomicNumber: 20, maxGain: 0, maxLoss: 2 },
  { symbol: "Cr", name: "\u94ec", atomicNumber: 24, maxGain: 0, maxLoss: 3 },
  { symbol: "Mn", name: "\u9530", atomicNumber: 25, maxGain: 0, maxLoss: 4 },
  { symbol: "Fe", name: "\u94c1", atomicNumber: 26, maxGain: 0, maxLoss: 3 },
  { symbol: "Cu", name: "\u94dc", atomicNumber: 29, maxGain: 0, maxLoss: 2 },
  { symbol: "Zn", name: "\u950c", atomicNumber: 30, maxGain: 0, maxLoss: 2 },
  { symbol: "Br", name: "\u6ea2", atomicNumber: 35, maxGain: 1, maxLoss: 0 },
  { symbol: "Kr", name: "\u6c2a", atomicNumber: 36, maxGain: 0, maxLoss: 0 },
  { symbol: "Ag", name: "\u94f6", atomicNumber: 47, maxGain: 0, maxLoss: 1 },
  { symbol: "I", name: "\u7898", atomicNumber: 53, maxGain: 1, maxLoss: 0 },
  { symbol: "Xe", name: "\u6c19", atomicNumber: 54, maxGain: 0, maxLoss: 0 }
];

const REACTION_DEFS = [
  {
    id: "na-cl",
    title: "\u94a0\u4e0e\u6c2f\u6c14",
    reactionType: "ionic",
    equation: "2Na + Cl2 -> 2NaCl",
    species: [
      { id: "na1", symbol: "Na", name: "\u94a0", atomicNumber: 11, slot: 1 },
      { id: "na2", symbol: "Na", name: "\u94a0", atomicNumber: 11, slot: 2 },
      { id: "cl1", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 4 },
      { id: "cl2", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 5 }
    ],
    steps: [
      { type: "electron_transfer", from: "na1", to: "cl1", shell: "M" },
      { type: "electron_transfer", from: "na2", to: "cl2", shell: "M" }
    ]
  },
  {
    id: "mg-o",
    title: "\u9541\u4e0e\u6c27\u6c14",
    reactionType: "ionic",
    equation: "2Mg + O2 -> 2MgO",
    species: [
      { id: "mg1", symbol: "Mg", name: "\u9541", atomicNumber: 12, slot: 1 },
      { id: "mg2", symbol: "Mg", name: "\u9541", atomicNumber: 12, slot: 2 },
      { id: "o1", symbol: "O", name: "\u6c27", atomicNumber: 8, slot: 4 },
      { id: "o2", symbol: "O", name: "\u6c27", atomicNumber: 8, slot: 5 }
    ],
    steps: [
      { type: "electron_transfer", from: "mg1", to: "o1", shell: "M" },
      { type: "electron_transfer", from: "mg1", to: "o1", shell: "M" },
      { type: "electron_transfer", from: "mg2", to: "o2", shell: "M" },
      { type: "electron_transfer", from: "mg2", to: "o2", shell: "M" }
    ]
  },
  {
    id: "ca-cl",
    title: "\u9499\u4e0e\u6c2f\u6c14",
    reactionType: "ionic",
    equation: "Ca + Cl2 -> CaCl2",
    species: [
      { id: "ca1", symbol: "Ca", name: "\u9499", atomicNumber: 20, slot: 2 },
      { id: "cl1", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 4 },
      { id: "cl2", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 6 }
    ],
    steps: [
      { type: "electron_transfer", from: "ca1", to: "cl1", shell: "M" },
      { type: "electron_transfer", from: "ca1", to: "cl2", shell: "M" }
    ]
  },
  {
    id: "al-cl",
    title: "\u94dd\u4e0e\u6c2f\u6c14",
    reactionType: "ionic",
    equation: "2Al + 3Cl2 -> 2AlCl3",
    species: [
      { id: "al1", symbol: "Al", name: "\u94dd", atomicNumber: 13, slot: 1 },
      { id: "al2", symbol: "Al", name: "\u94dd", atomicNumber: 13, slot: 3 },
      { id: "cl1", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 4 },
      { id: "cl2", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 5 },
      { id: "cl3", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 6 }
    ],
    steps: [
      { type: "electron_transfer", from: "al1", to: "cl1", shell: "M" },
      { type: "electron_transfer", from: "al1", to: "cl2", shell: "M" },
      { type: "electron_transfer", from: "al1", to: "cl3", shell: "M" },
      { type: "electron_transfer", from: "al2", to: "cl1", shell: "M" },
      { type: "electron_transfer", from: "al2", to: "cl2", shell: "M" },
      { type: "electron_transfer", from: "al2", to: "cl3", shell: "M" }
    ]
  },
  {
    id: "h2-o2-cov",
    title: "\u6c22\u4e0e\u6c27\u53cd\u5e94",
    reactionType: "covalent",
    equation: "2H2 + O2 -> 2H2O",
    species: [
      { id: "h1", symbol: "H", name: "\u6c22", atomicNumber: 1, slot: 1 },
      { id: "h2", symbol: "H", name: "\u6c22", atomicNumber: 1, slot: 2 },
      { id: "o1", symbol: "O", name: "\u6c27", atomicNumber: 8, slot: 4 },
      { id: "h3", symbol: "H", name: "\u6c22", atomicNumber: 1, slot: 5 },
      { id: "h4", symbol: "H", name: "\u6c22", atomicNumber: 1, slot: 6 }
    ],
    steps: [
      { type: "covalent_reorder", phase: "break", shell: "L" },
      { type: "covalent_reorder", phase: "regroup", shell: "L" },
      { type: "covalent_reorder", phase: "form", shell: "L" }
    ]
  }
];

const SHELL_NAMES = ["K", "L", "M"];
const SHELL_SIZES = [180, 270, 360];
const SPIN_DURATIONS = [7, 11, 15];
const SHELL_CLASS = ["shell-k", "shell-l", "shell-m"];
const ELECTRON_CLASS = ["electron-k", "electron-l", "electron-m"];

const MINI_SHELL_SIZES = [56, 82, 108];
const MINI_SPIN_DURATIONS = [4, 6.5, 9];
const SLOT_POSITIONS = {
  1: { x: "16%", y: "34%" },
  2: { x: "50%", y: "34%" },
  3: { x: "84%", y: "34%" },
  4: { x: "16%", y: "76%" },
  5: { x: "50%", y: "76%" },
  6: { x: "84%", y: "76%" }
};
const SHELL_IDX = { K: 0, L: 1, M: 2 };
const MAX_MODEL_ELECTRONS = 18;

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function normalizeShells(shells) {
  const out = [0, 0, 0];
  shells.forEach((n, idx) => {
    if (idx < 3) out[idx] = n;
  });
  return out;
}

function buildShellsByRule(atomicNumber) {
  let rest = atomicNumber;
  const k = Math.min(2, rest);
  rest -= k;
  const l = Math.min(8, rest);
  rest -= l;
  const m = Math.min(8, rest);
  return [k, l, m].filter((n) => n > 0);
}

function buildLayers(shells) {
  return shells.map((count, idx) => {
    const size = SHELL_SIZES[idx];
    const radius = Math.round(size / 2);
    const angleStep = 360 / count;
    const electrons = Array.from({ length: count }, (_, i) => ({
      key: `${idx}-${i}`,
      angle: +(i * angleStep).toFixed(2),
      translate: radius
    }));

    return {
      key: `${SHELL_NAMES[idx]}-${count}`,
      name: SHELL_NAMES[idx],
      count,
      size,
      spinDuration: SPIN_DURATIONS[idx],
      shellClass: SHELL_CLASS[idx],
      electronClass: ELECTRON_CLASS[idx],
      electrons
    };
  });
}

function buildMiniLayers(shells, keyPrefix) {
  const normalized = normalizeShells(shells);
  return normalized
    .map((count, idx) => {
      if (count <= 0) return null;
      const size = MINI_SHELL_SIZES[idx];
      const radius = Math.round(size / 2);
      const angleStep = 360 / count;
      const electrons = Array.from({ length: count }, (_, i) => ({
        key: `${keyPrefix}-${idx}-${i}`,
        angle: +(i * angleStep).toFixed(2),
        translate: radius
      }));

      return {
        key: `${keyPrefix}-layer-${idx}`,
        name: SHELL_NAMES[idx],
        count,
        size,
        spinDuration: MINI_SPIN_DURATIONS[idx],
        shellClass: SHELL_CLASS[idx],
        electronClass: ELECTRON_CLASS[idx],
        electrons
      };
    })
    .filter(Boolean);
}

function shellText(shells) {
  const n = normalizeShells(shells);
  return `${SHELL_NAMES[0]}:${n[0]}  ${SHELL_NAMES[1]}:${n[1]}  ${SHELL_NAMES[2]}:${n[2]}`;
}

function formatCharge(delta) {
  if (delta === 0) return "0";
  if (delta > 0) return `${delta}+`;
  return `${Math.abs(delta)}-`;
}

function outerElectrons(shells) {
  const n = normalizeShells(shells);
  for (let i = n.length - 1; i >= 0; i -= 1) {
    if (n[i] > 0) return n[i];
  }
  return 0;
}

function getChangedShellIndex(currentShells, nextShells) {
  const current = normalizeShells(currentShells);
  const next = normalizeShells(nextShells);
  for (let i = 0; i < 3; i += 1) {
    if (current[i] !== next[i]) return i;
  }
  return Math.max(0, next.findIndex((n) => n > 0));
}

function getIonicRole(delta, ui) {
  if (delta < 0) return ui.roleLose;
  if (delta > 0) return ui.roleGain;
  return ui.roleNeutral;
}

function slotPosition(slot) {
  return SLOT_POSITIONS[slot] || SLOT_POSITIONS[2];
}

const ELEMENT_MAP = ELEMENT_LIST.reduce((acc, item) => {
  acc[item.symbol] = {
    symbol: item.symbol,
    name: item.name,
    atomicNumber: item.atomicNumber,
    shells: buildShellsByRule(item.atomicNumber),
    maxGain: item.maxGain,
    maxLoss: item.maxLoss
  };
  return acc;
}, {});

function buildElementButtons() {
  return Object.keys(ELEMENT_MAP).map((symbol) => {
    const item = ELEMENT_MAP[symbol];
    return {
      symbol: item.symbol,
      text: `${item.symbol} ${item.name}`
    };
  });
}

function enrichSpecies(species, reactionId) {
  return species.map((sp) => {
    const beforeShells = normalizeShells(sp.beforeShells);
    const workingShells = normalizeShells(sp.workingShells);
    const afterShells = normalizeShells(sp.afterShells);
    return Object.assign({}, sp, {
      beforeShellText: shellText(beforeShells),
      workingShellText: shellText(workingShells),
      afterShellText: shellText(afterShells),
      beforeOuter: outerElectrons(beforeShells),
      workingOuter: outerElectrons(workingShells),
      afterOuter: outerElectrons(afterShells),
      workingChargeText: formatCharge(sp.baseTotal - sp.workingTotal),
      afterChargeText: formatCharge(sp.baseTotal - sp.afterTotal),
      workingLayers: buildMiniLayers(workingShells, `${reactionId}-${sp.id}-working`)
    });
  });
}

function buildReactionState(def, ui) {
  const speciesMap = {};

  def.species.forEach((sp) => {
    const total = clamp(sp.atomicNumber, 0, MAX_MODEL_ELECTRONS);
    const beforeShells = normalizeShells(buildShellsByRule(total));
    speciesMap[sp.id] = {
      id: sp.id,
      symbol: sp.symbol,
      name: sp.name,
      slot: sp.slot,
      baseTotal: total,
      beforeTotal: total,
      workingTotal: total,
      afterTotal: total,
      beforeShells,
      workingShells: beforeShells,
      afterShells: beforeShells,
      role: ui.roleNeutral
    };
  });

  const steps = def.steps.map((step, idx) => {
    if (def.reactionType === "ionic") {
      const fromSp = speciesMap[step.from];
      const toSp = speciesMap[step.to];
      if (fromSp && toSp) {
        fromSp.afterTotal = clamp(fromSp.afterTotal - 1, 0, MAX_MODEL_ELECTRONS);
        toSp.afterTotal = clamp(toSp.afterTotal + 1, 0, MAX_MODEL_ELECTRONS);
      }
      return {
        key: `${def.id}-step-${idx}`,
        type: step.type,
        from: step.from,
        to: step.to,
        shell: step.shell,
        text: `${ui.stepPrefix}${idx + 1}${ui.stepMid}${(fromSp ? fromSp.symbol : step.from).toUpperCase()}${ui.loseElectronText}${(toSp ? toSp.symbol : step.to).toUpperCase()}${ui.gainElectronText}(${step.shell}${ui.layerSuffix})`
      };
    }

    let text = `${ui.stepPrefix}${idx + 1}${ui.stepMid}${ui.covBreakText}`;
    if (step.phase === "regroup") text = `${ui.stepPrefix}${idx + 1}${ui.stepMid}${ui.covRegroupText}`;
    if (step.phase === "form") text = `${ui.stepPrefix}${idx + 1}${ui.stepMid}${ui.covFormText}`;
    return {
      key: `${def.id}-step-${idx}`,
      type: step.type,
      phase: step.phase,
      shell: step.shell,
      text
    };
  });

  const species = Object.keys(speciesMap)
    .map((k) => speciesMap[k])
    .sort((a, b) => a.slot - b.slot)
    .map((sp) => {
      const afterShells = normalizeShells(buildShellsByRule(sp.afterTotal));
      const delta = sp.baseTotal - sp.afterTotal;
      return Object.assign({}, sp, {
        afterShells,
        role: def.reactionType === "ionic" ? getIonicRole(delta, ui) : ui.roleShare
      });
    });

  const enriched = enrichSpecies(species, def.id);

  let finalSummary = `${ui.finalPrefix}${ui.covFinalText}`;
  if (def.reactionType === "ionic") {
    const charged = enriched
      .filter((sp) => sp.afterChargeText !== "0")
      .map((sp) => `${sp.symbol}${sp.afterChargeText}`);
    finalSummary = `${ui.finalPrefix}${charged.join(" + ")}`;
  }

  return {
    id: def.id,
    title: def.title,
    reactionType: def.reactionType,
    equation: def.equation,
    steps,
    species: enriched,
    finalSummary
  };
}

function buildReactionViews(ui) {
  return REACTION_DEFS.map((def) => buildReactionState(def, ui));
}

function buildDisplayCard(sp, reactionId, useAfter) {
  return {
    key: `${reactionId}-${sp.id}-${useAfter ? "after" : "working"}`,
    id: sp.id,
    symbol: sp.symbol,
    name: sp.name,
    count: sp.count || 1,
    chargeText: useAfter ? sp.afterChargeText : sp.workingChargeText,
    layers: useAfter ? buildMiniLayers(sp.afterShells, `${reactionId}-${sp.id}-after`) : sp.workingLayers
  };
}

function buildReactionFormulaRows(reaction) {
  if (!reaction || !reaction.species || !reaction.species.length) return [];

  const ordered = cloneSpecies(reaction.species).sort((a, b) => a.slot - b.slot);
  const symbols = ordered.reduce((acc, sp) => {
    if (!acc.includes(sp.symbol)) acc.push(sp.symbol);
    return acc;
  }, []);
  const aSymbol = symbols[0] || "A";
  const bSymbol = symbols[1] || symbols[0] || "B";

  const grouped = {};
  ordered.forEach((sp) => {
    if (!grouped[sp.symbol]) grouped[sp.symbol] = [];
    grouped[sp.symbol].push(sp);
  });

  const aGroup = grouped[aSymbol] || [];
  const bGroup = grouped[bSymbol] || [];
  const aBefore = aGroup[0]
    ? buildDisplayCard(Object.assign({}, aGroup[0], { count: aGroup.length }), reaction.id, false)
    : null;
  const bBefore = bGroup[0]
    ? buildDisplayCard(Object.assign({}, bGroup[0], { count: bGroup.length }), reaction.id, false)
    : null;
  const aAfter = aGroup[0]
    ? buildDisplayCard(Object.assign({}, aGroup[0], { count: aGroup.length }), reaction.id, true)
    : null;
  const bAfter = bGroup[0]
    ? buildDisplayCard(Object.assign({}, bGroup[0], { count: bGroup.length }), reaction.id, true)
    : null;

  const covalentLinks =
    reaction.reactionType === "covalent"
      ? [
          {
            id: `${reaction.id}-cov-link`,
            from: aSymbol,
            to: bSymbol
          }
        ]
      : [];

  return [
    {
      id: `${reaction.id}-line-a`,
      symbol: aSymbol,
      count: aGroup.length,
      beforeCard: aBefore,
      afterCard: aAfter,
      isCovalent: false
    },
    {
      id: `${reaction.id}-line-b`,
      symbol: bSymbol,
      count: bGroup.length,
      beforeCard: bBefore,
      afterCard: bAfter,
      isCovalent: reaction.reactionType === "covalent",
      covalentLinks
    }
  ];
}

function cloneSpecies(species) {
  return species.map((sp) => Object.assign({}, sp));
}

function buildFlyForStep(step, species) {
  if (step.type === "electron_transfer") {
    const fromSp = species.find((s) => s.id === step.from);
    const toSp = species.find((s) => s.id === step.to);
    const fromPos = slotPosition(fromSp ? fromSp.slot : 2);
    const toPos = slotPosition(toSp ? toSp.slot : 5);
    const shellIdx = SHELL_IDX[step.shell] == null ? 0 : SHELL_IDX[step.shell];
    return {
      show: true,
      style: `--sx:${fromPos.x};--sy:${fromPos.y};--ex:${toPos.x};--ey:${toPos.y};`,
      colorClass: ELECTRON_CLASS[shellIdx] || "electron-k",
      focusFromSymbol: fromSp ? fromSp.symbol : "",
      focusToSymbol: toSp ? toSp.symbol : ""
    };
  }

  const covMap = {
    break: { sx: "44%", sy: "30%", ex: "56%", ey: "30%", colorClass: "electron-l", phase: "break" },
    regroup: { sx: "38%", sy: "30%", ex: "62%", ey: "30%", colorClass: "electron-l", phase: "regroup" },
    form: { sx: "50%", sy: "30%", ex: "50%", ey: "30%", colorClass: "electron-l", phase: "form" }
  };
  const cfg = covMap[step.phase] || covMap.break;
  return {
    show: true,
    style: `--sx:${cfg.sx};--sy:${cfg.sy};--ex:${cfg.ex};--ey:${cfg.ey};`,
    colorClass: cfg.colorClass,
    focusFromSymbol: "",
    focusToSymbol: "",
    covalentPhase: cfg.phase
  };
}

Page({
  data: {
    ui: {
      title: "\u5316\u5b66\u53cd\u5e94",
      subtitle: "\u539f\u5b50\u7ed3\u6784\u52a8\u753b\uff1a\u539f\u5b50\u6838\u4e0e\u6838\u5916\u7535\u5b50\u5206\u5c42\u6392\u5e03",
      switchTitle: "\u5143\u7d20\u5207\u6362",
      nucleus: "\u539f\u5b50\u6838",
      protonLabel: "\u8d28\u5b50\u6570",
      layerInfoTitle: "\u7535\u5b50\u5c42\u7edf\u8ba1",
      electronLabel: "\u7535\u5b50",
      layerSuffix: "\u5c42",
      gainBtn: "\u5f97\u7535\u5b50",
      lossBtn: "\u5931\u7535\u5b50",
      chargeTitleWithColon: "\u5f53\u524d\u7535\u8377\uff1a",
      neutralRef: "\uff08\u76f8\u5bf9\u4e2d\u6027\u539f\u5b50\uff09",
      commonRangeTitleWithColon: "\u5e38\u89c1\u79bb\u5b50\u8303\u56f4\uff1a",
      gainPrefix: "\u53ef\u5f97",
      lossPrefix: "\u53ef\u5931",
      limitGain: "\u5f53\u524d\u5143\u7d20\u5df2\u8fbe\u5e38\u89c1\u5f97\u7535\u5b50\u4e0a\u9650",
      limitLoss: "\u5f53\u524d\u5143\u7d20\u5df2\u8fbe\u5e38\u89c1\u5931\u7535\u5b50\u4e0a\u9650",
      reactionDemoTitle: "\u5e38\u89c1\u5316\u5b66\u53cd\u5e94\u6f14\u793a",
      playBtn: "\u64ad\u653e\u52a8\u753b",
      replayBtn: "\u91cd\u64ad\u52a8\u753b",
      roleLose: "\u5931\u7535\u5b50\u65b9",
      roleGain: "\u5f97\u7535\u5b50\u65b9",
      roleNeutral: "\u4e2d\u6027\u7c92\u5b50",
      roleShare: "\u5171\u4eab\u7535\u5b50\u65b9",
      beforeLabel: "\u53cd\u5e94\u524d",
      afterLabel: "\u53cd\u5e94\u540e",
      shellDistLabel: "\u7535\u5b50\u5c42",
      outerLabel: "\u6700\u5916\u5c42\u7535\u5b50",
      chargeLabel: "\u79bb\u5b50\u7535\u8377",
      stepPrefix: "\u7b2c",
      stepMid: "\u6b65\uff1a",
      loseElectronText: "\u5931\u53bb1e\uff0c",
      gainElectronText: "\u5f97\u52301e",
      finalPrefix: "\u6700\u7ec8\u5b9a\u683c\uff1a",
      covBreakText: "\u65e7\u952e\u5f31\u5316\u5e76\u65ad\u88c2\uff08H-H, O=O\uff09",
      covRegroupText: "\u7535\u5b50\u5bf9\u91cd\u7ec4\u5230O-H\u6210\u952e\u4f4d\u7f6e",
      covFormText: "\u5f62\u62102\u4e2aH2O\u5206\u5b50\u7684\u5171\u4ef7\u952e",
      covFinalText: "2H2O\u6210\u952e\u5b8c\u6210\uff0c\u5171\u4eab\u7535\u5b50\u5bf9\u5f62\u6210\uff0c\u5206\u5b50\u6574\u4f53\u4e2d\u6027",
      chargeDeltaOnly: "\u7535\u8377\u53d8\u5316",
      covalentLinkNote: "\u5171\u4ef7\u5173\u8054"
    },
    elementButtons: buildElementButtons(),
    activeSymbol: "H",
    atomVisible: true,
    currentElement: ELEMENT_MAP.H,
    layers: buildLayers(ELEMENT_MAP.H.shells),
    baseElectronTotal: ELEMENT_MAP.H.shells.reduce((a, b) => a + b, 0),
    electronDelta: 0,
    chargeText: "0",
    flyAnimClass: "",
    flyElectronClass: "electron-k",
    operationHint: "",
    commonRangeText: "",
    reactionOptions: [],
    reactionViews: [],
    activeReactionId: "",
    activeReaction: null,
    reactionFormulaRows: [],
    demoHint: "",
    demoStep: 0,
    demoPlaying: false,
    demoFinal: false,
    showDemoFly: false,
    demoFlyStyle: "",
    demoFlyColorClass: "electron-k",
    focusFromSymbol: "",
    focusToSymbol: "",
    covalentPhase: "before"
  },

  onLoad() {
    this.applyElement("H", false);
    this.initReactionDemo();
  },

  onUnload() {
    if (this.replayTimer) {
      clearTimeout(this.replayTimer);
      this.replayTimer = null;
    }
    if (this.flyTimer) {
      clearTimeout(this.flyTimer);
      this.flyTimer = null;
    }
    this.clearReactionDemoTimers();
  },

  switchElement(event) {
    const symbol = event.currentTarget.dataset.symbol;
    if (!symbol || symbol === this.data.activeSymbol) return;
    this.applyElement(symbol, true);
  },

  applyElement(symbol, replay) {
    const element = ELEMENT_MAP[symbol];
    if (!element) return;

    const baseTotal = element.shells.reduce((a, b) => a + b, 0);
    const rangeText = `${this.data.ui.gainPrefix}${element.maxGain}e / ${this.data.ui.lossPrefix}${element.maxLoss}e`;
    const nextData = {
      activeSymbol: symbol,
      currentElement: element,
      layers: buildLayers(element.shells),
      baseElectronTotal: baseTotal,
      electronDelta: 0,
      chargeText: "0",
      flyAnimClass: "",
      flyElectronClass: "electron-k",
      operationHint: "",
      commonRangeText: rangeText
    };

    if (!replay) {
      this.setData(Object.assign({}, nextData, { atomVisible: true }));
      return;
    }

    if (this.replayTimer) {
      clearTimeout(this.replayTimer);
      this.replayTimer = null;
    }
    if (this.flyTimer) {
      clearTimeout(this.flyTimer);
      this.flyTimer = null;
    }

    this.setData({ atomVisible: false });
    this.replayTimer = setTimeout(() => {
      this.setData(Object.assign({}, nextData, { atomVisible: true }));
      this.replayTimer = null;
    }, 40);
  },

  gainElectron() {
    this.runElectronChange(1);
  },

  loseElectron() {
    this.runElectronChange(-1);
  },

  runElectronChange(step) {
    const directionClass = step > 0 ? "electron-fly-in" : "electron-fly-out";
    const element = this.data.currentElement;
    const base = this.data.baseElectronTotal;
    const currentTotal = clamp(base - this.data.electronDelta, 0, MAX_MODEL_ELECTRONS);
    const gainedCount = clamp(base - currentTotal, 0, MAX_MODEL_ELECTRONS);
    const lostCount = clamp(currentTotal - base, 0, MAX_MODEL_ELECTRONS);

    if (step > 0 && gainedCount >= element.maxGain) {
      this.setData({ operationHint: this.data.ui.limitGain });
      return;
    }
    if (step < 0 && lostCount >= element.maxLoss) {
      this.setData({ operationHint: this.data.ui.limitLoss });
      return;
    }

    const currentShells = buildShellsByRule(currentTotal);
    const nextTotal = clamp(currentTotal + step, 0, MAX_MODEL_ELECTRONS);
    if (nextTotal === currentTotal) return;

    const nextDelta = base - nextTotal;
    const nextShells = buildShellsByRule(nextTotal);
    const nextLayers = buildLayers(nextShells);
    const changedIdx = getChangedShellIndex(currentShells, nextShells);
    const flyElectronClass = ELECTRON_CLASS[changedIdx] || "electron-k";

    if (this.flyTimer) {
      clearTimeout(this.flyTimer);
      this.flyTimer = null;
    }

    this.setData({
      flyAnimClass: directionClass,
      flyElectronClass,
      operationHint: ""
    });

    this.flyTimer = setTimeout(() => {
      this.setData({
        layers: nextLayers,
        electronDelta: nextDelta,
        chargeText: formatCharge(nextDelta),
        flyAnimClass: "",
        flyElectronClass
      });
      this.flyTimer = null;
    }, 650);
  },

  initReactionDemo() {
    const views = buildReactionViews(this.data.ui);
    if (!views.length) return;
    const first = views[0];
    this.setData({
      reactionViews: views,
      reactionOptions: views.map((r) => ({ id: r.id, title: r.title })),
      activeReactionId: first.id,
      activeReaction: first,
      reactionFormulaRows: buildReactionFormulaRows(first),
      demoHint: first.steps[0] ? first.steps[0].text : "",
      demoStep: 0,
      demoPlaying: false,
      demoFinal: false,
      showDemoFly: false,
      demoFlyStyle: "",
      demoFlyColorClass: "electron-k",
      focusFromSymbol: "",
      focusToSymbol: "",
      covalentPhase: "before"
    });
  },

  selectReaction(event) {
    const id = event.currentTarget.dataset.id;
    if (!id || id === this.data.activeReactionId) return;
    const selected = this.data.reactionViews.find((r) => r.id === id);
    if (!selected) return;

    this.clearReactionDemoTimers();
    this.setData({
      activeReactionId: selected.id,
      activeReaction: selected,
      reactionFormulaRows: buildReactionFormulaRows(selected),
      demoHint: selected.steps[0] ? selected.steps[0].text : "",
      demoStep: 0,
      demoPlaying: false,
      demoFinal: false,
      showDemoFly: false,
      demoFlyStyle: "",
      demoFlyColorClass: "electron-k",
      focusFromSymbol: "",
      focusToSymbol: "",
      covalentPhase: "before"
    });
  },

  playReactionDemo() {
    if (!this.data.activeReaction || this.data.demoPlaying) return;
    this.clearReactionDemoTimers();
    this.setData({
      demoPlaying: true,
      demoFinal: false,
      demoStep: 0,
      showDemoFly: false,
      focusFromSymbol: "",
      focusToSymbol: "",
      covalentPhase: "before"
    });
    this.runReactionStep(0);
  },

  replayReactionDemo() {
    if (!this.data.activeReaction) return;
    this.clearReactionDemoTimers();

    const resetSpecies = enrichSpecies(
      this.data.activeReaction.species.map((sp) =>
        Object.assign({}, sp, {
          workingTotal: sp.beforeTotal,
          workingShells: sp.beforeShells
        })
      ),
      this.data.activeReaction.id
    );

    const resetReaction = Object.assign({}, this.data.activeReaction, { species: resetSpecies });

    this.setData({
      activeReaction: resetReaction,
      reactionFormulaRows: buildReactionFormulaRows(resetReaction),
      demoPlaying: false,
      demoFinal: false,
      demoStep: 0,
      showDemoFly: false,
      demoFlyStyle: "",
      demoFlyColorClass: "electron-k",
      focusFromSymbol: "",
      focusToSymbol: "",
      covalentPhase: "before",
      demoHint: resetReaction.steps[0] ? resetReaction.steps[0].text : ""
    });
    this.playReactionDemo();
  },

  runReactionStep(idx) {
    const reaction = this.data.activeReaction;
    if (!reaction) return;

    if (idx >= reaction.steps.length) {
      const finalizedSpecies = enrichSpecies(
        cloneSpecies(reaction.species).map((sp) =>
          Object.assign({}, sp, {
            workingTotal: sp.afterTotal,
            workingShells: sp.afterShells
          })
        ),
        reaction.id
      );

      const finalReaction = Object.assign({}, reaction, { species: finalizedSpecies });
      this.setData({
        activeReaction: finalReaction,
        reactionFormulaRows: buildReactionFormulaRows(finalReaction),
        demoPlaying: false,
        demoFinal: true,
        showDemoFly: false,
        demoHint: reaction.finalSummary,
        focusFromSymbol: "",
        focusToSymbol: "",
        covalentPhase: "final"
      });
      return;
    }

    const step = reaction.steps[idx];
    let nextSpecies = cloneSpecies(reaction.species);

    if (reaction.reactionType === "ionic" && step.type === "electron_transfer") {
      nextSpecies = nextSpecies.map((sp) => {
        if (sp.id === step.from) {
          const nextTotal = clamp(sp.workingTotal - 1, 0, MAX_MODEL_ELECTRONS);
          return Object.assign({}, sp, {
            workingTotal: nextTotal,
            workingShells: normalizeShells(buildShellsByRule(nextTotal))
          });
        }
        if (sp.id === step.to) {
          const nextTotal = clamp(sp.workingTotal + 1, 0, MAX_MODEL_ELECTRONS);
          return Object.assign({}, sp, {
            workingTotal: nextTotal,
            workingShells: normalizeShells(buildShellsByRule(nextTotal))
          });
        }
        return sp;
      });
    }

    nextSpecies = enrichSpecies(nextSpecies, reaction.id);

    const fly = buildFlyForStep(step, nextSpecies);
    const nextReaction = Object.assign({}, reaction, { species: nextSpecies });

    this.setData({
      activeReaction: nextReaction,
      reactionFormulaRows: buildReactionFormulaRows(nextReaction),
      demoStep: idx + 1,
      demoHint: step.text,
      demoFlyStyle: fly.style,
      demoFlyColorClass: fly.colorClass,
      showDemoFly: false,
      focusFromSymbol: fly.focusFromSymbol || "",
      focusToSymbol: fly.focusToSymbol || "",
      covalentPhase: fly.covalentPhase || this.data.covalentPhase
    });

    this.demoPulseTimer = setTimeout(() => {
      this.setData({ showDemoFly: fly.show });
      this.demoStepTimer = setTimeout(() => {
        this.setData({ showDemoFly: false });
        this.demoGapTimer = setTimeout(() => {
          this.runReactionStep(idx + 1);
        }, 260);
      }, 700);
    }, 20);
  },

  clearReactionDemoTimers() {
    if (this.demoPulseTimer) {
      clearTimeout(this.demoPulseTimer);
      this.demoPulseTimer = null;
    }
    if (this.demoStepTimer) {
      clearTimeout(this.demoStepTimer);
      this.demoStepTimer = null;
    }
    if (this.demoGapTimer) {
      clearTimeout(this.demoGapTimer);
      this.demoGapTimer = null;
    }
  }
});
