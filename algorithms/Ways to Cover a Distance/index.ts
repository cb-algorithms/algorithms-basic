import { generateArray } from '../../utils.ts/array';

export const f1 = (distance: number, steps: number[]) => {
  const f = (n: number): number => {
    if (n === 0) return 1;
    let result = 0;
    for (const step of steps) {
      if (n >= step) result += f(n - step);
    }
    return result;
  };
  return f(distance);
};

export const f2 = (distance: number, steps: number[]) => {
  const results = generateArray<number>(distance + 1);
  results[0] = 1;
  for (let n = 1; n <= distance; ++n) {
    let result = 0;
    for (const step of steps) {
      if (n >= step) result += results[n - step];
    }
    results[n] = result;
  }
  return results[distance];
};

export const f3 = (distance: number, steps: number[]) => {
  const results = generateArray<number>(distance + 1);
  results[0] = 1;

  const f = (n: number) => {
    let result = results[n];
    if (typeof result !== 'number') {
      result = 0;
      for (const step of steps) {
        if (n >= step) result += f(n - step);
      }
    }
    return (results[n] = result);
  };

  return f(distance);
};
