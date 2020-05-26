import { generateArray } from '../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const knapsack1 = (
  totalItem: number,
  values: number[],
  weights: number[],
  totalWeight: number,
) => {
  const knapsack = (item: number, weight: number): number =>
    item === 0
      ? 0
      : weights[item - 1] > weight
      ? knapsack(item - 1, weight)
      : Math.max(
          values[item - 1] + knapsack(item - 1, weight - weights[item - 1]),
          knapsack(item - 1, weight),
        );

  return knapsack(totalItem, totalWeight);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const knapsack2 = (
  totalItem: number,
  values: number[],
  weights: number[],
  totalWeight: number,
) => {
  const results = generateArray<number>(totalItem + 1, totalWeight + 1);

  for (let item = 0; item <= totalItem; ++item) {
    for (let weight = 0; weight <= totalWeight; ++weight) {
      results[item][weight] =
        item === 0
          ? 0
          : weights[item - 1] > weight
          ? results[item - 1][weight]
          : Math.max(
              values[item - 1] + results[item - 1][weight - weights[item - 1]],
              results[item - 1][weight],
            );
    }
  }

  return results[totalItem][totalWeight];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const knapsack3 = (
  totalItem: number,
  values: number[],
  weights: number[],
  totalWeight: number,
) => {
  const results = generateArray<number>(totalItem + 1, totalWeight + 1);

  const knapsack = (item: number, weight: number) => {
    let result = results[item][weight];
    if (typeof result !== 'number')
      result =
        item === 0
          ? 0
          : weights[item - 1] > weight
          ? knapsack(item - 1, weight)
          : Math.max(
              values[item - 1] + knapsack(item - 1, weight - weights[item - 1]),
              knapsack(item - 1, weight),
            );
    return (results[item][weight] = result);
  };

  return knapsack(totalItem, totalWeight);
};
// -----------------------------------------------------------------------------
