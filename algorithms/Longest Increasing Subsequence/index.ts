import { generateArray, maxOf } from '../../utils.ts/array';

export const f1 = (arr: number[]) => {
  const f = (n: number) => {
    let max_n = 1;
    for (let i = n - 1; i >= 1; --i) {
      const max_i = f(i);
      if (arr[i - 1] < arr[n - 1] && max_n < max_i + 1) max_n = max_i + 1;
    }
    return max_n;
  };

  return maxOf(Array.from(arr, (_, i) => f(i + 1)));
};

export const f2 = (arr: number[]) => {
  const maxes = generateArray<number>(arr.length + 1);
  let max = Number.NEGATIVE_INFINITY;

  for (let n = 0; n <= arr.length; ++n) {
    let max_n = 1;
    for (let i = n - 1; i >= 0; --i) {
      const max_i = maxes[i];
      if (arr[i - 1] < arr[n - 1] && max_n < max_i + 1) max_n = max_i + 1;
    }
    maxes[n] = max_n;
    if (max_n > max) max = max_n;
  }

  return max;
};

export const f3 = (arr: number[]) => {
  const maxes = generateArray<number>(arr.length + 1);

  const f = (n: number) => {
    let max = maxes[n];

    if (typeof max !== 'number') {
      max = 1;
      for (let i = n - 1; i >= 1; --i) {
        const max_i = f(i);
        if (arr[i - 1] < arr[n - 1] && max < max_i + 1) max = max_i + 1;
      }
    }

    return (maxes[n] = max);
  };

  return maxOf(Array.from(arr, (_, i) => f(i + 1)));
};
