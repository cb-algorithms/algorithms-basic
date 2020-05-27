import { sumArray, rangeRevert, generateArray } from '../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const coinChange1 = (coins: number[], totalCents: number) => {
  const coinChange = (coinIndex: number, cents: number): number =>
    cents === 0
      ? 1
      : sumArray(
          rangeRevert(coinIndex + 1).map(index =>
            cents >= coins[index] ? coinChange(index, cents - coins[index]) : 0,
          ),
        );
  return coinChange(coins.length - 1, totalCents);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const coinChange2 = (coins: number[], totalCents: number) => {
  const results = generateArray<number>(coins.length, totalCents);

  for (let coinIndex = 0; coinIndex < coins.length; ++coinIndex) {
    for (let cents = 0; cents <= totalCents; ++cents) {
      results[coinIndex][cents] =
        cents === 0
          ? 1
          : sumArray(
              rangeRevert(coinIndex + 1).map(index =>
                cents >= coins[index]
                  ? results[index][cents - coins[index]]
                  : 0,
              ),
            );
    }
  }

  return results[coins.length - 1][totalCents];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const coinChange3 = (coins: number[], totalCents: number) => {
  const results = generateArray<number>(coins.length, totalCents);

  const coinChange = (coinIndex: number, cents: number): number => {
    let result = results[coinIndex][cents];

    if (typeof result !== 'number')
      result =
        cents === 0
          ? 1
          : sumArray(
              rangeRevert(coinIndex + 1).map(index =>
                cents >= coins[index]
                  ? coinChange(index, cents - coins[index])
                  : 0,
              ),
            );

    return (results[coinIndex][cents] = result);
  };
  return coinChange(coins.length - 1, totalCents);
};
// -----------------------------------------------------------------------------
