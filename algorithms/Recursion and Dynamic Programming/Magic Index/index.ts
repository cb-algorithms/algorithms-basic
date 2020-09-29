export const f1 = (arr: number[]) => {
  for (let n = 0; n < arr.length; ++n) {
    if (arr[n] === n) return n;
  }
  return undefined;
};

export const f2 = (arr: number[]) => {
  const f = (b: number, e: number): number | undefined => {
    if (b > e) return undefined;
    const n = Math.trunc((b + e) / 2);
    return arr[n] === n ? n : arr[n] > n ? f(b, e - 1) : f(b + 1, e);
  };
  return f(0, arr.length);
};
