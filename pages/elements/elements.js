const UI = {
  title: "\u5143\u7d20\u8ba4\u8bc6",
  subtitle: "\u7b80\u5316\u7248\u521d\u4e2d\u5e38\u7528\u5143\u7d20\u5468\u671f\u8868\uff08\u70b9\u51fb/\u89e6\u6478/\u60ac\u505c\u53ef\u67e5\u770b\u8be6\u60c5\uff09",
  legendMetal: "\u91d1\u5c5e\u5143\u7d20",
  legendNonmetal: "\u975e\u91d1\u5c5e\u5143\u7d20",
  legendNoble: "\u7a00\u6709\u6c14\u4f53",
  seqNo: "\u539f\u5b50\u5e8f\u6570",
  labelCategory: "\u7c7b\u522b",
  labelProtons: "\u8d28\u5b50\u6570",
  labelElectrons: "\u6838\u5916\u7535\u5b50\u6570",
  labelValence: "\u5e38\u89c1\u5316\u5408\u4ef7",
  labelUsage: "\u7b80\u5355\u7528\u9014",
  close: "\u5173\u95ed",
  popupTitleSuffix: "\u8be6\u7ec6\u4fe1\u606f"
};

const ROW_COUNT = 5;
const COL_COUNT = 18;

const ELEMENTS = [
  { no: 1, symbol: "H", name: "\u6c22", row: 1, col: 1, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 1, electrons: 1, valence: "+1, -1", usage: "\u53ef\u7528\u4e8e\u6e05\u6d01\u80fd\u6e90\u4e0e\u5236\u6c28\u5de5\u4e1a" },
  { no: 2, symbol: "He", name: "\u6c26", row: 1, col: 18, category: "noble", categoryText: "\u7a00\u6709\u6c14\u4f53", protons: 2, electrons: 2, valence: "0", usage: "\u7528\u4e8e\u4f4e\u6e29\u51b7\u5374\u4e0e\u6c14\u7403\u5145\u6c14" },

  { no: 3, symbol: "Li", name: "\u9502", row: 2, col: 1, category: "metal", categoryText: "\u91d1\u5c5e", protons: 3, electrons: 3, valence: "+1", usage: "\u9502\u7535\u6c60\u91cd\u8981\u539f\u6599" },
  { no: 4, symbol: "Be", name: "\u94cd", row: 2, col: 2, category: "metal", categoryText: "\u91d1\u5c5e", protons: 4, electrons: 4, valence: "+2", usage: "\u5408\u91d1\u6750\u6599\uff08\u521d\u4e2d\u4ec5\u4f5c\u8ba4\u77e5\uff09" },
  { no: 5, symbol: "B", name: "\u787c", row: 2, col: 13, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 5, electrons: 5, valence: "+3", usage: "\u53ef\u7528\u4e8e\u73bb\u7483\u4e0e\u6e05\u6d17\u5242\u539f\u6599" },
  { no: 6, symbol: "C", name: "\u78b3", row: 2, col: 14, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 6, electrons: 6, valence: "-4, +2, +4", usage: "\u6709\u673a\u7269\u7684\u57fa\u7840\u5143\u7d20\uff0c\u77f3\u58a8\u53ef\u5bfc\u7535" },
  { no: 7, symbol: "N", name: "\u6c2e", row: 2, col: 15, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 7, electrons: 7, valence: "-3, +2, +4, +5", usage: "\u7a7a\u6c14\u4e3b\u8981\u6210\u5206\uff0c\u7528\u4e8e\u5236\u6c28" },
  { no: 8, symbol: "O", name: "\u6c27", row: 2, col: 16, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 8, electrons: 8, valence: "-2", usage: "\u652f\u6301\u547c\u5438\u4e0e\u71c3\u70e7" },
  { no: 9, symbol: "F", name: "\u6c1f", row: 2, col: 17, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 9, electrons: 9, valence: "-1", usage: "\u7528\u4e8e\u542b\u6c1f\u6750\u6599\u4e0e\u53e3\u8154\u62a4\u7406" },
  { no: 10, symbol: "Ne", name: "\u6c16", row: 2, col: 18, category: "noble", categoryText: "\u7a00\u6709\u6c14\u4f53", protons: 10, electrons: 10, valence: "0", usage: "\u9700\u8679\u706f\u7684\u53d1\u5149\u6c14\u4f53" },

  { no: 11, symbol: "Na", name: "\u94a0", row: 3, col: 1, category: "metal", categoryText: "\u91d1\u5c5e", protons: 11, electrons: 11, valence: "+1", usage: "\u98df\u76d0\u4e2d\u542b\u6709\u94a0\uff0c\u5de5\u4e1a\u4e0a\u53ef\u5236\u78b1" },
  { no: 12, symbol: "Mg", name: "\u9541", row: 3, col: 2, category: "metal", categoryText: "\u91d1\u5c5e", protons: 12, electrons: 12, valence: "+2", usage: "\u53ef\u7528\u4e8e\u5408\u91d1\u4e0e\u7167\u660e\u6750\u6599" },
  { no: 13, symbol: "Al", name: "\u94dd", row: 3, col: 13, category: "metal", categoryText: "\u91d1\u5c5e", protons: 13, electrons: 13, valence: "+3", usage: "\u95e8\u7a97\u3001\u6613\u62c9\u7f50\u3001\u5bfc\u7ebf\u5e38\u89c1\u6750\u6599" },
  { no: 14, symbol: "Si", name: "\u7845", row: 3, col: 14, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 14, electrons: 14, valence: "-4, +4", usage: "\u82af\u7247\u3001\u73bb\u7483\u4e0e\u592a\u9633\u80fd\u7535\u6c60\u6750\u6599" },
  { no: 15, symbol: "P", name: "\u78f7", row: 3, col: 15, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 15, electrons: 15, valence: "-3, +3, +5", usage: "\u5316\u80a5\u751f\u4ea7\u7684\u91cd\u8981\u5143\u7d20" },
  { no: 16, symbol: "S", name: "\u786b", row: 3, col: 16, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 16, electrons: 16, valence: "-2, +4, +6", usage: "\u53ef\u7528\u4e8e\u786b\u9178\u751f\u4ea7\u4e0e\u6a61\u80f6\u5de5\u4e1a" },
  { no: 17, symbol: "Cl", name: "\u6c2f", row: 3, col: 17, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 17, electrons: 17, valence: "-1, +1, +5, +7", usage: "\u6d88\u6bd2\u6740\u83cc\u4e0e\u6f02\u767d" },
  { no: 18, symbol: "Ar", name: "\u6c29", row: 3, col: 18, category: "noble", categoryText: "\u7a00\u6709\u6c14\u4f53", protons: 18, electrons: 18, valence: "0", usage: "\u706f\u6ce1\u5145\u6c14\u548c\u7131\u63a5\u4fdd\u62a4\u6c14" },

  { no: 19, symbol: "K", name: "\u94be", row: 4, col: 1, category: "metal", categoryText: "\u91d1\u5c5e", protons: 19, electrons: 19, valence: "+1", usage: "\u94be\u80a5\u4e3a\u519c\u4f5c\u7269\u63d0\u4f9b\u517b\u5206" },
  { no: 20, symbol: "Ca", name: "\u9499", row: 4, col: 2, category: "metal", categoryText: "\u91d1\u5c5e", protons: 20, electrons: 20, valence: "+2", usage: "\u4e0e\u9aa8\u9abc\u5065\u5eb7\u53ca\u5efa\u6750\u76f8\u5173" },
  { no: 24, symbol: "Cr", name: "\u94ec", row: 4, col: 6, category: "metal", categoryText: "\u91d1\u5c5e", protons: 24, electrons: 24, valence: "+2, +3, +6", usage: "\u4e0d\u9508\u94a2\u4e2d\u7684\u91cd\u8981\u6210\u5206" },
  { no: 25, symbol: "Mn", name: "\u9530", row: 4, col: 7, category: "metal", categoryText: "\u91d1\u5c5e", protons: 25, electrons: 25, valence: "+2, +4, +7", usage: "\u94a2\u94c1\u51b6\u70bc\u4e0e\u5e72\u7535\u6c60\u6750\u6599" },
  { no: 26, symbol: "Fe", name: "\u94c1", row: 4, col: 8, category: "metal", categoryText: "\u91d1\u5c5e", protons: 26, electrons: 26, valence: "+2, +3", usage: "\u94a2\u94c1\u5de5\u4e1a\u7684\u6838\u5fc3\u5143\u7d20" },
  { no: 29, symbol: "Cu", name: "\u94dc", row: 4, col: 11, category: "metal", categoryText: "\u91d1\u5c5e", protons: 29, electrons: 29, valence: "+1, +2", usage: "\u7535\u7ebf\u7535\u7f06\u4e0e\u7535\u5668\u5e38\u7528\u6750\u6599" },
  { no: 30, symbol: "Zn", name: "\u950c", row: 4, col: 12, category: "metal", categoryText: "\u91d1\u5c5e", protons: 30, electrons: 30, valence: "+2", usage: "\u9540\u950c\u9632\u9508\u4e0e\u5e72\u7535\u6c60\u6750\u6599" },
  { no: 35, symbol: "Br", name: "\u6ea2", row: 4, col: 17, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 35, electrons: 35, valence: "-1, +1, +5", usage: "\u611f\u5149\u6750\u6599\u4e0e\u963b\u71c3\u5242" },
  { no: 36, symbol: "Kr", name: "\u6c2a", row: 4, col: 18, category: "noble", categoryText: "\u7a00\u6709\u6c14\u4f53", protons: 36, electrons: 36, valence: "0", usage: "\u7279\u79cd\u7167\u660e\u706f\u5177\u6c14\u4f53" },

  { no: 47, symbol: "Ag", name: "\u94f6", row: 5, col: 11, category: "metal", categoryText: "\u91d1\u5c5e", protons: 47, electrons: 47, valence: "+1", usage: "\u94f6\u955c\u53cd\u5e94\u548c\u7535\u5b50\u5668\u4ef6" },
  { no: 53, symbol: "I", name: "\u7898", row: 5, col: 17, category: "nonmetal", categoryText: "\u975e\u91d1\u5c5e", protons: 53, electrons: 53, valence: "-1, +1, +5, +7", usage: "\u7898\u76d0\u4e0e\u6d88\u6bd2\u6db2" },
  { no: 54, symbol: "Xe", name: "\u6c19", row: 5, col: 18, category: "noble", categoryText: "\u7a00\u6709\u6c14\u4f53", protons: 54, electrons: 54, valence: "0", usage: "\u6c19\u706f\u4e0e\u7279\u79cd\u5149\u6e90" }
];

function buildGridCells(elements) {
  const posMap = {};

  elements.forEach((el, idx) => {
    posMap[`${el.row}-${el.col}`] = Object.assign({}, el, { _idx: idx });
  });

  const cells = [];
  for (let r = 1; r <= ROW_COUNT; r += 1) {
    for (let c = 1; c <= COL_COUNT; c += 1) {
      const key = `${r}-${c}`;
      const hit = posMap[key];
      if (hit) {
        cells.push({
          key,
          empty: false,
          element: hit
        });
      } else {
        cells.push({
          key,
          empty: true
        });
      }
    }
  }
  return cells;
}

Page({
  data: {
    ui: UI,
    elements: ELEMENTS,
    gridCells: buildGridCells(ELEMENTS),
    activeSymbol: "",
    selectedElement: null,
    showPopup: false
  },

  openDetail(event) {
    const idx = Number(event.currentTarget.dataset.index);
    const target = this.data.elements[idx];
    if (!target) return;

    this.setData({
      activeSymbol: target.symbol,
      selectedElement: target,
      showPopup: true
    });
  },

  closeDetail() {
    this.setData({
      showPopup: false,
      activeSymbol: ""
    });
  },

  noop() {}
});
