import { generateArray } from '../../../utils.ts/array';

export const fa1 = (arr: number[]) => {
  const f = (n: number, m: number): number =>
    n === 0
      ? 0
      : arr[n - 1] > m
      ? f(n - 1, m)
      : Math.max(f(n - 1, m), 1 + f(n - 1, arr[n - 1]));
  return f(arr.length, Math.max(...arr));
};

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

console.log(
  fa3([3, 1]),
  fa3([3, 10, 2, 1, 20, 5]),
  fa3([50, 3, 10, 7, 40, 80, 26]),
  fa3([10, 22, 9, 33, 21, 50, 41, 60, 80, 24]),
);
