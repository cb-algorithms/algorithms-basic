import { generateArray, maxOf } from '../../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const fa1 = (prices: number[]) => {
  const f = (n: number, l: number): number =>
    l === 0 || n === 0
      ? 0
      : Math.max(f(n - 1, l), l < n ? 0 : prices[n - 1] + f(n, l - n));
  return f(prices.length, prices.length);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const fa2 = (prices: number[]) => {
  const results = generateArray<number>(prices.length + 1, prices.length + 1);
  for (let n = 0; n <= prices.length; ++n) {
    for (let l = 0; l <= prices.length; ++l) {
      results[n][l] =
        l === 0 || n === 0
          ? 0
          : Math.max(
              results[n - 1][l],
              l < n ? 0 : prices[n - 1] + results[n][l - n],
            );
    }
  }
  return results[prices.length][prices.length];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const fa3 = (prices: number[]) => {
  const results = generateArray<number>(prices.length + 1, prices.length + 1);
  const f = (n: number, l: number): number => {
    let result = results[n][l];
    if (typeof result !== 'boolean')
      result =
        l === 0 || n === 0
          ? 0
          : Math.max(f(n - 1, l), l < n ? 0 : prices[n - 1] + f(n, l - n));
    return (results[n][l] = result);
  };
  return f(prices.length, prices.length);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const fb1 = (prices: number[]) => {
  const f = (n: number): number => {
    if (n === 0) return 0;
    return maxOf(
      Array.from({ length: n }, (_, index) => prices[index] + f(n - index - 1)),
    );
  };
  return f(prices.length);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const fb2 = (prices: number[]) => {
  const results = generateArray<number>(prices.length + 1);
  results[0] = 0;

  for (let n = 1; n <= prices.length; ++n) {
    results[n] = maxOf(
      Array.from(
        { length: n },
        (_, index) => prices[index] + results[n - index - 1],
      ),
    );
  }

  return results[prices.length];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const fb3 = (prices: number[]) => {
  const results = generateArray<number>(prices.length + 1);
  results[0] = 0;

  const fi = (n: number): number => {
    let result = results[n];

    if (typeof result !== 'number')
      result = maxOf(
        Array.from(
          { length: n },
          (_, index) => prices[index] + fi(n - index - 1),
        ),
      );

    return (results[n] = result);
  };

  return fi(prices.length);
};
// -----------------------------------------------------------------------------
