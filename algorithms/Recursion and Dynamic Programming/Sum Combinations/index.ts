import { generateArray } from '../../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (total: number, numbers: number[]) => {
  const f = (n: number): number => {
    if (n === 0) return 1;
    let result = 0;
    for (const number of numbers) {
      if (n >= number) result += f(n - number);
    }
    return result;
  };
  return f(total);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f2 = (total: number, numbers: number[]) => {
  const results = generateArray<number>(total + 1);
  results[0] = 1;
  for (let n = 1; n <= total; ++n) {
    let result = 0;
    for (const number of numbers) {
      if (n >= number) result += results[n - number];
    }
    results[n] = result;
  }
  return results[total];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (total: number, numbers: number[]) => {
  const results = generateArray<number>(total + 1);
  results[0] = 1;

  const f = (n: number) => {
    let result = results[n];
    if (typeof result !== 'number') {
      result = 0;
      for (const number of numbers) {
        if (n >= number) result += f(n - number);
      }
    }
    return (results[n] = result);
  };

  return f(total);
};
// -----------------------------------------------------------------------------
