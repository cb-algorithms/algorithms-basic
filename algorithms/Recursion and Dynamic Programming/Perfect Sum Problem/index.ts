export const f1 = (set: number[], sum: number) => {
  const f = (n: number, s: number, c: number[], r: number[][]) => {
    if (s === 0) {
      r.push(c);
      return;
    }
    if (n === 0) return;
    if (s >= set[n - 1]) {
      f(n - 1, s - set[n - 1], [...c, set[n - 1]], r);
    }
    f(n - 1, s, [...c], r);
  };
  const results: number[][] = [];
  f(set.length, sum, [], results);
  return results;
};

console.log(f1([2, 3, 5, 6, 8, 10], 10));
console.log(f1([1, 2, 3, 4, 5], 10));
