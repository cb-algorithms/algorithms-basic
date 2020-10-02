import { generateArray } from '../../../utils/array';

export const f1 = (lists: number[][]) => {
  const f = (n: number, mod2: number) => {
    if (n === 0) return mod2;
    let result = 0;
    for (let i = 0; i < lists[n - 1].length; ++i) {
      result += f(n - 1, (mod2 + lists[n - 1][i]) % 2);
    }
    return result;
  };
  return f(lists.length, 0);
};

export const f2 = (lists: number[][]) => {
  const results = generateArray<number>(lists.length + 1, 2);
  results[0][0] = 0;
  results[0][1] = 1;

  for (let n = 1; n <= lists.length; ++n) {
    results[n][0] = 0;
    results[n][1] = 0;

    for (let i = 0; i < lists[n - 1].length; ++i) {
      results[n][0] += results[n - 1][lists[n - 1][i] % 2];
      results[n][1] += results[n - 1][(1 + lists[n - 1][i]) % 2];
    }
  }

  return results[lists.length][0];
};

export const f3 = (lists: number[][]) => {
  const results = generateArray<number>(lists.length + 1, 2);
  results[0][0] = 0;
  results[0][1] = 1;

  const f = (n: number, mod2: number) => {
    let result = results[n][mod2];

    if (typeof result !== 'number') {
      result = 0;
      for (let i = 0; i < lists[n - 1].length; ++i) {
        result += f(n - 1, (mod2 + lists[n - 1][i]) % 2);
      }
    }

    return (results[n][mod2] = result);
  };

  return f(lists.length, 0);
};
