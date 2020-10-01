import { generateArray } from '../../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (
  count: number,
  values: number[],
  weights: number[],
  totalWeight: number,
) => {
  const f = (n: number, w: number): number =>
    w === 0 || n === 0 || w < weights[n - 1]
      ? 0
      : Math.max(values[n - 1] + f(n - 1, w - weights[n - 1]), f(n - 1, w));

  return f(count, totalWeight);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f2 = (
  count: number,
  values: number[],
  weights: number[],
  totalWeight: number,
) => {
  const results = generateArray<number>(count + 1, totalWeight + 1);
  for (let n = 0; n <= count; ++n) {
    for (let w = 0; w <= totalWeight; ++w) {
      results[n][w] =
        w === 0 || n === 0 || w < weights[n - 1]
          ? 0
          : Math.max(
              values[n - 1] + results[n - 1][w - weights[n - 1]],
              results[n - 1][w],
            );
    }
  }
  return results[count][totalWeight];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (
  count: number,
  values: number[],
  weights: number[],
  totalWeight: number,
) => {
  const results = generateArray<number>(count + 1, totalWeight + 1);
  const f = (n: number, w: number): number => {
    let result = results[n][w];
    if (typeof result !== 'number')
      result =
        w === 0 || n === 0 || w < weights[n - 1]
          ? 0
          : Math.max(values[n - 1] + f(n - 1, w - weights[n - 1]), f(n - 1, w));
    return (results[n][w] = result);
  };
  return f(count, totalWeight);
};
// -----------------------------------------------------------------------------
