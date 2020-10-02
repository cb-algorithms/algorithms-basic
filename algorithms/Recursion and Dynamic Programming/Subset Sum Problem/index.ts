import { generateArray } from '../../../utils/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (set: number[], sum: number) => {
  const f = (n: number, s: number): boolean => {
    if (s === 0) return true;
    if (n === 0) return false;
    return (s >= set[n - 1] && f(n - 1, s - set[n - 1])) || f(n - 1, s);
  };
  return f(set.length, sum);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f2 = (set: number[], sum: number) => {
  const results = generateArray<boolean>(set.length + 1, sum);
  for (let n = 0; n <= set.length; ++n) {
    for (let s = 0; s <= sum; ++s) {
      if (s === 0) results[n][s] = true;
      else if (n === 0) results[n][s] = false;
      else
        results[n][s] =
          (s >= set[n - 1] && results[n - 1][s - set[n - 1]]) ||
          results[n - 1][s];
    }
  }
  return results[set.length][sum];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (set: number[], sum: number) => {
  const results = generateArray<boolean>(set.length + 1, sum);
  const f = (n: number, s: number): boolean => {
    let result = results[n][s];
    if (typeof result !== 'boolean') {
      if (s === 0) result = true;
      else if (n === 0) result = false;
      else
        result = (s >= set[n - 1] && f(n - 1, s - set[n - 1])) || f(n - 1, s);
    }
    return (results[n][s] = result);
  };
  return f(set.length, sum);
};
// -----------------------------------------------------------------------------
