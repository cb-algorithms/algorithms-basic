import { generateArray } from '../../../utils/array';

export const f1 = (coins: number[], total: number) => {
  const f = (n: number, t: number): number => {
    if (t === 0) return 1;
    let result = 0;
    if (t >= coins[n - 1]) result += f(n, t - coins[n - 1]);
    if (n > 1) result += f(n - 1, t);
    return result;
  };
  return f(coins.length, total);
};

export const f2 = (coins: number[], total: number) => {
  const results = generateArray<number>(coins.length + 1, total + 1);
  for (let n = 0; n <= coins.length; ++n) {
    for (let t = 0; t <= total; ++t) {
      if (t === 0) results[n][t] = 1;
      else {
        results[n][t] = 0;
        if (t >= coins[n - 1]) results[n][t] += results[n][t - coins[n - 1]];
        if (n > 1) results[n][t] += results[n - 1][t];
      }
    }
  }
  return results[coins.length][total];
};

export const f3 = (coins: number[], total: number) => {
  const results = generateArray<number>(coins.length + 1, total + 1);
  const f = (n: number, t: number): number => {
    let result = results[n][t];
    if (typeof result !== 'number') {
      if (t === 0) result = 1;
      else {
        result = 0;
        if (t >= coins[n - 1]) result += f(n, t - coins[n - 1]);
        if (n > 1) result += f(n - 1, t);
      }
    }
    return (results[n][t] = result);
  };
  return f(coins.length, total);
};
