import { generateArray } from '../../../utils/array';

export const f1 = (prices: number[]) => {
  const f = (n: number, l: number): number =>
    l === 0 || n === 0
      ? 0
      : Math.max(f(n - 1, l), l < n ? 0 : prices[n - 1] + f(n, l - n));
  return f(prices.length, prices.length);
};

export const f2 = (prices: number[]) => {
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

export const f3 = (prices: number[]) => {
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
