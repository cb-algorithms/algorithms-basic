import { generateArray } from '../../../utils/array';

export const f1 = (set: number[], sum: number) => {
  const selected = generateArray<0 | 1>(set.length);
  const f = (n: number, s: number): boolean => {
    if (s === 0) return true;
    if (n === set.length - 1) return false;
    if (f(n + 1, s - set[n])) {
      selected[n] = 1;
      return true;
    }
    return f(n + 1, s);
  };
  return f(0, sum) && selected;
};

// ------------------------------------
// DEBUG
// ------------------------------------
console.log(f1([14, 26, 32, 15, 9, 16, 22, 8], 53));
console.log(f1([22, 14, 26, 32, 9, 16, 8], 53));
// ------------------------------------
