import { generateArray } from '../../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (stepCount: number) => {
  const f = (n: number): number =>
    n === 0
      ? 1
      : Number(n >= 1 && f(n - 1)) +
        Number(n >= 2 && f(n - 2)) +
        Number(n >= 3 && f(n - 3));
  return f(stepCount);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f2 = (stepCount: number) => {
  const results = generateArray<number>(stepCount + 1);
  results[0] = 1;
  for (let n = 1; n <= stepCount; ++n) {
    results[n] =
      Number(n >= 1 && results[n - 1]) +
      Number(n >= 2 && results[n - 2]) +
      Number(n >= 3 && results[n - 3]);
  }
  return results[stepCount];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (stepCount: number) => {
  const results = generateArray<number>(stepCount + 1);
  results[0] = 1;
  const f = (n: number): number => {
    let result = results[n];
    if (typeof result !== 'number')
      result =
        Number(n >= 1 && f(n - 1)) +
        Number(n >= 2 && f(n - 2)) +
        Number(n >= 3 && f(n - 3));
    return (results[n] = result);
  };
  return f(stepCount);
};
// -----------------------------------------------------------------------------
