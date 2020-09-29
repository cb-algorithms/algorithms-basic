import { generateArray } from '../../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (diceCount: number, faceCount: number, sum: number) => {
  const f = (n: number, s: number): number => {
    if (n === 0) {
      return s === 0 ? 1 : 0;
    }
    let count = 0;
    for (let v = 1; v <= faceCount; ++v) {
      if (s >= v) count += f(n - 1, s - v);
    }
    return count;
  };
  return f(diceCount, sum);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f2 = (diceCount: number, faceCount: number, sum: number) => {
  const results = generateArray<number>(diceCount + 1, sum + 1);
  for (let n = 0; n <= diceCount; ++n) {
    for (let s = 0; s <= sum; ++s) {
      if (n === 0) {
        results[n][s] = s === 0 ? 1 : 0;
      } else {
        results[n][s] = 0;
        for (let v = 1; v <= faceCount; ++v) {
          if (s >= v) results[n][s] += results[n - 1][s - v];
        }
      }
    }
  }
  return results[diceCount][sum];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (diceCount: number, faceCount: number, sum: number) => {
  const results = generateArray<number>(diceCount + 1, sum + 1);
  const f = (n: number, s: number): number => {
    if (n === 0) {
      return s === 0 ? 1 : 0;
    }
    let result = results[n][s];
    if (typeof result !== 'number') {
      result = 0;
      for (let v = 1; v <= faceCount; ++v) {
        if (s >= v) result += f(n - 1, s - v);
      }
    }
    return (results[n][s] = result);
  };
  return f(diceCount, sum);
};
// -----------------------------------------------------------------------------
