import { generateArray, maxOf } from '../../utils.ts/array';

export const f1 = (prices: number[]) => {
  const fi = (n: number): number => {
    if (n === 0) return 0;
    return maxOf(
      Array.from(
        { length: n },
        (_, index) => prices[index] + fi(n - index - 1),
      ),
    );
  };
  return fi(prices.length);
};

export const f2 = (prices: number[]) => {
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

export const f3 = (prices: number[]) => {
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
