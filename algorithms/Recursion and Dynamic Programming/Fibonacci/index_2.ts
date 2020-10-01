import { generateArray } from '../../../utils.ts/array';

export const f1 = (number: number) => {
  const f = (n: number): number => (n <= 1 ? n : f(n - 1) + f(n - 2));
  return f(number);
};

export const f4 = (number: number) => {
  const results = generateArray<number>(number + 1);
  for (let n = 0; n <= number; ++n) {
    results[n] = n <= 1 ? n : results[n - 1] + results[n - 2];
  }
  return results[number];
};

export const f6 = (number: number) => {
  const results = generateArray<number>(number + 1);
  const f = (n: number): number => {
    let result = results[n];
    if (typeof result === 'number') return result;
    result = n <= 1 ? n : f(n - 1) + f(n - 2);
    results[n] = result;
    return result;
  };
  return f(number);
};
