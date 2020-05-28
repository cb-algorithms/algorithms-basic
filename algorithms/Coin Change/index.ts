import { generateArray } from '../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (coinValues: number[], totalCents: number) => {
  const f = (n: number, cents: number): number =>
    cents === 0
      ? 1
      : n === 0
      ? 0
      : f(n - 1, cents) +
        (cents >= coinValues[n - 1] ? f(n, cents - coinValues[n - 1]) : 0);
  return f(coinValues.length, totalCents);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f2 = (coinValues: number[], totalCents: number) => {
  const results = generateArray<number>(coinValues.length + 1, totalCents);

  for (let n = 0; n <= coinValues.length; ++n) {
    for (let cents = 0; cents <= totalCents; ++cents) {
      results[n][cents] =
        cents === 0
          ? 1
          : n === 0
          ? 0
          : results[n - 1][cents] +
            (cents >= coinValues[n - 1]
              ? results[n][cents - coinValues[n - 1]]
              : 0);
    }
  }

  return results[coinValues.length][totalCents];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (coinValues: number[], totalCents: number) => {
  const results = generateArray<number>(coinValues.length + 1, totalCents);

  const f = (n: number, cents: number): number => {
    let result = results[n][cents];

    if (typeof result !== 'number')
      result =
        cents === 0
          ? 1
          : n === 0
          ? 0
          : f(n - 1, cents) +
            (cents >= coinValues[n - 1] ? f(n, cents - coinValues[n - 1]) : 0);

    return (results[n][cents] = result);
  };

  return f(coinValues.length, totalCents);
};
// -----------------------------------------------------------------------------
