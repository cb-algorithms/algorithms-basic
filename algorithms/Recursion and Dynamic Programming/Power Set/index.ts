export const f1 = (set: number[]) => {
  const f = (n: number): number[][] => {
    if (n === 0) return [[]];
    const subsets = f(n - 1);
    return [...subsets, ...subsets.map(subset => [...subset, set[n - 1]])];
  };
  return f(set.length);
};

// ------------------------------------
// DEBUG
// ------------------------------------
console.log(f1([1]));
console.log(f1([1, 2]));
console.log(f1([1, 2, 3]));
console.log(f1([1, 2, 3, 4]));
// ------------------------------------