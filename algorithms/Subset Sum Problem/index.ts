import { generateArray } from '../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (set: number[], totalSum: number) => {
  const fi = (nth: number, sum: number): boolean =>
    sum === 0
      ? true
      : nth === 0
      ? false
      : (sum >= set[nth - 1] && fi(nth - 1, sum - set[nth - 1])) ||
        fi(nth - 1, sum);

  return fi(set.length, totalSum);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f2 = (set: number[], totalSum: number) => {
  const results = generateArray<boolean>(set.length + 1, totalSum);

  for (let nth = 0; nth <= set.length; ++nth) {
    for (let sum = 0; sum <= totalSum; ++sum) {
      results[nth][sum] =
        sum === 0
          ? true
          : nth === 0
          ? false
          : (sum >= set[nth - 1] && results[nth - 1][sum - set[nth - 1]]) ||
            results[nth - 1][sum];
    }
  }

  return results[set.length][totalSum];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (set: number[], totalSum: number) => {
  const results = generateArray<boolean>(set.length + 1, totalSum);

  const fi = (nth: number, sum: number): boolean => {
    let result = results[nth][sum];

    if (typeof result !== 'boolean')
      result =
        sum === 0
          ? true
          : nth === 0
          ? false
          : (sum >= set[nth - 1] && fi(nth - 1, sum - set[nth - 1])) ||
            fi(nth - 1, sum);

    return (results[nth][sum] = result);
  };

  return fi(set.length, totalSum);
};
// -----------------------------------------------------------------------------
