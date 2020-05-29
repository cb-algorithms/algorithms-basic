import { generateArray } from '../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (total: number, numbers: number[]) => {
  const f = (sum: number): number => {
    if (sum === 0) return 1;
    let result = 0;
    for (const number of numbers) {
      if (sum >= number) result += f(sum - number);
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
  for (let sum = 0; sum <= total; ++sum) {
    results[sum] =
      sum === 0
        ? 1
        : numbers.reduce(
            (acc, number) => acc + (sum >= number ? results[sum - number] : 0),
            0,
          );
  }
  return results[total];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (total: number, numbers: number[]) => {
  const results = generateArray<number>(total + 1);

  const combination = (sum: number) => {
    let result = results[sum];
    if (typeof result !== 'number')
      result =
        sum === 0
          ? 1
          : numbers.reduce(
              (acc, number) =>
                acc + (sum >= number ? combination(sum - number) : 0),
              0,
            );
    return (results[sum] = result);
  };

  return combination(total);
};
// -----------------------------------------------------------------------------
