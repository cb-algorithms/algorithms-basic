import { generateArray, maxOf } from '../../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const fa1 = (arr: number[]) => {
  const f = (n: number, m: number): number =>
    n === 0
      ? 0
      : arr[n - 1] > m
      ? f(n - 1, m)
      : Math.max(f(n - 1, m), 1 + f(n - 1, arr[n - 1]));
  return f(arr.length, Math.max(...arr));
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const fa2 = (arr: number[]) => {
  const max = Math.max(...arr);
  const results = generateArray<number>(arr.length + 1, max + 1);
  for (let n = 0; n <= arr.length; ++n) {
    for (let m = 0; m <= max; ++m) {
      results[n][m] =
        n === 0
          ? 0
          : arr[n - 1] > m
          ? results[n - 1][m]
          : Math.max(results[n - 1][m], 1 + results[n - 1][arr[n - 1]]);
    }
  }
  return results[arr.length][max];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const fa3 = (arr: number[]) => {
  const max = Math.max(...arr);
  const results = generateArray<number>(arr.length + 1, max + 1);
  const f = (n: number, m: number): number => {
    let result = results[n][m];
    if (typeof result !== 'number')
      result =
        n === 0
          ? 0
          : arr[n - 1] > m
          ? f(n - 1, m)
          : Math.max(f(n - 1, m), 1 + f(n - 1, arr[n - 1]));
    return (results[n][m] = result);
  };
  return f(arr.length, max);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const fb1 = (arr: number[]) => {
  const f = (n: number) => {
    let max_n = 1;
    for (let i = n - 1; i >= 1; --i) {
      const max_i = f(i);
      if (arr[i - 1] < arr[n - 1] && max_n < max_i + 1) max_n = max_i + 1;
    }
    return max_n;
  };
  return maxOf(Array.from(arr, (_, i) => f(i + 1)));
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const fb2 = (arr: number[]) => {
  const maxes = generateArray<number>(arr.length + 1);
  let max = Number.NEGATIVE_INFINITY;
  for (let n = 0; n <= arr.length; ++n) {
    let max_n = 1;
    for (let i = n - 1; i >= 0; --i) {
      const max_i = maxes[i];
      if (arr[i - 1] < arr[n - 1] && max_n < max_i + 1) max_n = max_i + 1;
    }
    maxes[n] = max_n;
    if (max_n > max) max = max_n;
  }
  return max;
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const fb3 = (arr: number[]) => {
  const maxes = generateArray<number>(arr.length + 1);
  const f = (n: number) => {
    let max = maxes[n];
    if (typeof max !== 'number') {
      max = 1;
      for (let i = n - 1; i >= 1; --i) {
        const max_i = f(i);
        if (arr[i - 1] < arr[n - 1] && max < max_i + 1) max = max_i + 1;
      }
    }
    return (maxes[n] = max);
  };
  return maxOf(Array.from(arr, (_, i) => f(i + 1)));
};
// -----------------------------------------------------------------------------
