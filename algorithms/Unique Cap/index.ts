export const f1 = (capLists: number[][]) => {
  const caps: Record<number, 0 | 1> = {};
  for (let i = 0; i < capLists.length; ++i) {
    for (let j = 0; j < capLists[i].length; ++j) {
      caps[capLists[i][j]] = 0;
    }
  }
};
