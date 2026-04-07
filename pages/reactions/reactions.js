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
      { type: "electron_transfer", from: "na1", to: "cl1", shell: "M", path: "p1" },
      { type: "electron_transfer", from: "na2", to: "cl2", shell: "M", path: "p2" }
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
      { type: "electron_transfer", from: "mg1", to: "o1", shell: "M", path: "p1" },
      { type: "electron_transfer", from: "mg1", to: "o1", shell: "M", path: "p1" },
      { type: "electron_transfer", from: "mg2", to: "o2", shell: "M", path: "p2" },
      { type: "electron_transfer", from: "mg2", to: "o2", shell: "M", path: "p2" }
    ]
  },
  {
    id: "ca-cl",
    title: "\u9499\u4e0e\u6c2f\u6c14",
    reactionType: "ionic",
    equation: "Ca + Cl2 -> CaCl2",
    species: [
      { id: "ca1", symbol: "Ca", name: "\u9499", atomicNumber: 20, slot: 1 },
      { id: "cl1", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 4 },
      { id: "cl2", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 5 }
    ],
    steps: [
      { type: "electron_transfer", from: "ca1", to: "cl1", shell: "M", path: "p1" },
      { type: "electron_transfer", from: "ca1", to: "cl2", shell: "M", path: "p2" }
    ]
  },
  {
    id: "al-cl",
    title: "\u94dd\u4e0e\u6c2f\u6c14",
    reactionType: "ionic",
    equation: "2Al + 3Cl2 -> 2AlCl3",
    species: [
      { id: "al1", symbol: "Al", name: "\u94dd", atomicNumber: 13, slot: 1 },
      { id: "al2", symbol: "Al", name: "\u94dd", atomicNumber: 13, slot: 2 },
      { id: "cl1", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 3 },
      { id: "cl2", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 4 },
      { id: "cl3", symbol: "Cl", name: "\u6c2f", atomicNumber: 17, slot: 5 }
    ],
    steps: [
      { type: "electron_transfer", from: "al1", to: "cl1", shell: "M", path: "p0" },
      { type: "electron_transfer", from: "al1", to: "cl2", shell: "M", path: "p1" },
      { type: "electron_transfer", from: "al1", to: "cl3", shell: "M", path: "p2" },
      { type: "electron_transfer", from: "al2", to: "cl1", shell: "M", path: "p0" },
      { type: "electron_transfer", from: "al2", to: "cl2", shell: "M", path: "p1" },
      { type: "electron_transfer", from: "al2", to: "cl3", shell: "M", path: "p2" }
    ]
  },
  {
    id: "h2-o2-cov",
    title: "\u6c22\u4e0e\u6c27\u53cd\u5e94",
    reactionType: "covalent",
    equation: "2H2 + O2 -> 2H2O",
    species: [
      { id: "H", symbol: "H", name: "\u6c22", atomicNumber: 1, slot: 1 },
      { id: "O", symbol: "O", name: "\u6c27", atomicNumber: 8, slot: 4 }
    ],
    steps: [
      { type: "bond_break", phase: "break", shell: "L", path: "cov-break" },
      { type: "pair_regroup", phase: "regroup", shell: "L", path: "cov-pair" },
      { type: "bond_form", phase: "form", shell: "L", path: "cov-form" }
    ]
  }
];

const SHELL_NAMES = ["K", "L", "M"];
const SHELL_SIZES = [180, 270, 360];
const SPIN_DURATIONS = [7, 11, 15];
const SHELL_CLASS = ["shell-k", "shell-l", "shell-m"];
const ELECTRON_CLASS = ["electron-k", "electron-l", "electron-m"];
const SHELL_IDX = { K: 0, L: 1, M: 2 };
const MAX_MODEL_ELECTRONS = 18;

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
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

function formatCharge(delta) {
  if (delta === 0) return "0";
  if (delta > 0) return `${delta}+`;
  return `${Math.abs(delta)}-`;
}

function shellText(shells) {
  return SHELL_NAMES.map((n, i) => `${n}:${shells[i] || 0}`).join("  ");
}

function lastShellIndex(shells) {
  for (let i = shells.length - 1; i >= 0; i -= 1) {
    if (shells[i] > 0) return i;
  }
  return 0;
}

function padShells(shells) {
  const out = [0, 0, 0];
  shells.forEach((n, i) => {
    if (i < 3) out[i] = n;
  });
  return out;
}

function getChangedShellIndex(currentShells, nextShells) {
  const current = padShells(currentShells);
  const next = padShells(nextShells);
  for (let i = 0; i < 3; i += 1) {
    if (current[i] !== next[i]) return i;
  }
  return Math.max(0, next.findIndex((n) => n > 0));
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

function getIonicRole(delta, ui) {
  if (delta < 0) return ui.roleLose;
  if (delta > 0) return ui.roleGain;
  return ui.roleNeutral;
}

function buildIonicReactionView(def, ui) {
  const deltaMap = {};
  def.species.forEach((sp) => {
    deltaMap[sp.id] = 0;
  });

  const steps = def.steps.map((step, idx) => {
    deltaMap[step.from] -= 1;
    deltaMap[step.to] += 1;
    const shellIdx = SHELL_IDX[step.shell] == null ? 0 : SHELL_IDX[step.shell];
    const colorClass = ELECTRON_CLASS[shellIdx] || "electron-k";
    return {
      key: `${def.id}-step-${idx}`,
      type: step.type,
      phase: step.phase || "",
      text: `${ui.stepPrefix}${idx + 1}${ui.stepMid}${step.from.toUpperCase()}${ui.loseElectronText}${step.to.toUpperCase()}${ui.gainElectronText}(${step.shell}${ui.layerSuffix})`,
      pathClass: `fly-${step.path}`,
      lineClass: `line-${step.path}`,
      colorClass
    };
  });

  const lineClasses = Array.from(new Set(steps.map((s) => s.lineClass)));
  const species = def.species.map((sp) => {
    const beforeTotal = clamp(sp.atomicNumber, 0, MAX_MODEL_ELECTRONS);
    const afterTotal = clamp(beforeTotal + deltaMap[sp.id], 0, MAX_MODEL_ELECTRONS);
    const beforeShells = buildShellsByRule(beforeTotal);
    const afterShells = buildShellsByRule(afterTotal);
    return {
      id: sp.id,
      key: `${def.id}-${sp.id}`,
      symbol: sp.symbol,
      name: sp.name,
      slotClass: `slot-${sp.slot}`,
      role: getIonicRole(deltaMap[sp.id], ui),
      beforeShellText: shellText(beforeShells),
      afterShellText: shellText(afterShells),
      outerBefore: beforeShells[beforeShells.length - 1] || 0,
      outerAfter: afterShells[afterShells.length - 1] || 0,
      chargeText: formatCharge(-deltaMap[sp.id])
    };
  });

  const charged = species.filter((s) => s.chargeText !== "0").map((s) => `${s.symbol}${s.chargeText}`);
  const finalSummary = `${ui.finalPrefix}${charged.join(" + ")}`;

  return {
    id: def.id,
    title: def.title,
    reactionType: "ionic",
    equation: def.equation,
    species,
    steps,
    lineClasses,
    finalSummary
  };
}

function buildCovalentReactionView(def, ui) {
  const steps = def.steps.map((step, idx) => ({
    key: `${def.id}-step-${idx}`,
    type: step.type,
    phase: step.phase,
    text:
      step.type === "bond_break"
        ? `${ui.stepPrefix}${idx + 1}${ui.stepMid}${ui.covBreakText}`
        : step.type === "pair_regroup"
          ? `${ui.stepPrefix}${idx + 1}${ui.stepMid}${ui.covRegroupText}`
          : `${ui.stepPrefix}${idx + 1}${ui.stepMid}${ui.covFormText}`,
    pathClass: `cov-${step.path}`,
    colorClass: ELECTRON_CLASS[SHELL_IDX[step.shell] || 1] || "electron-l"
  }));

  const species = def.species.map((sp) => {
    const shells = buildShellsByRule(clamp(sp.atomicNumber, 0, MAX_MODEL_ELECTRONS));
    return {
      id: sp.id,
      key: `${def.id}-${sp.id}`,
      symbol: sp.symbol,
      name: sp.name,
      role: ui.roleShare,
      beforeShellText: shellText(shells),
      afterShellText: shellText(shells),
      outerBefore: shells[shells.length - 1] || 0,
      outerAfter: shells[shells.length - 1] || 0,
      chargeText: "0"
    };
  });

  return {
    id: def.id,
    title: def.title,
    reactionType: "covalent",
    equation: def.equation,
    species,
    steps,
    lineClasses: [],
    finalSummary: `${ui.finalPrefix}${ui.covFinalText}`
  };
}

function buildReactionViews(ui) {
  return REACTION_DEFS.map((def) => {
    if (def.reactionType === "covalent") return buildCovalentReactionView(def, ui);
    return buildIonicReactionView(def, ui);
  });
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
      covFinalText: "2H2O\u6210\u952e\u5b8c\u6210\uff0c\u7535\u5b50\u5bf9\u5171\u4eab\uff0c\u5206\u5b50\u6574\u4f53\u4e2d\u6027"
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
    demoHint: "",
    demoStep: 0,
    demoPlaying: false,
    demoFinal: false,
    showDemoFly: false,
    demoFlyClass: "",
    demoFlyColorClass: "electron-k",
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
      demoHint: first.steps[0] ? first.steps[0].text : "",
      demoStep: 0,
      demoPlaying: false,
      demoFinal: false,
      showDemoFly: false,
      demoFlyClass: "",
      demoFlyColorClass: "electron-k",
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
      demoHint: selected.steps[0] ? selected.steps[0].text : "",
      demoStep: 0,
      demoPlaying: false,
      demoFinal: false,
      showDemoFly: false,
      demoFlyClass: "",
      demoFlyColorClass: "electron-k",
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
      covalentPhase: "before"
    });
    this.runReactionStep(0);
  },

  replayReactionDemo() {
    if (!this.data.activeReaction) return;
    this.clearReactionDemoTimers();
    this.setData({
      demoPlaying: false,
      demoFinal: false,
      demoStep: 0,
      showDemoFly: false,
      demoFlyClass: "",
      demoFlyColorClass: "electron-k",
      covalentPhase: "before",
      demoHint: this.data.activeReaction.steps[0] ? this.data.activeReaction.steps[0].text : ""
    });
    this.playReactionDemo();
  },

  runReactionStep(idx) {
    const reaction = this.data.activeReaction;
    if (!reaction) return;

    if (idx >= reaction.steps.length) {
      this.setData({
        demoPlaying: false,
        demoFinal: true,
        showDemoFly: false,
        demoHint: reaction.finalSummary,
        covalentPhase: "final"
      });
      return;
    }

    const step = reaction.steps[idx];
    const nextState = {
      demoStep: idx + 1,
      demoHint: step.text,
      demoFlyClass: step.pathClass || "",
      demoFlyColorClass: step.colorClass || "electron-k",
      showDemoFly: false
    };

    if (reaction.reactionType === "covalent") {
      nextState.covalentPhase = step.phase || "process";
    }

    this.setData(nextState);

    this.demoPulseTimer = setTimeout(() => {
      this.setData({ showDemoFly: true });
      this.demoStepTimer = setTimeout(() => {
        this.setData({ showDemoFly: false });
        this.demoGapTimer = setTimeout(() => {
          this.runReactionStep(idx + 1);
        }, 240);
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