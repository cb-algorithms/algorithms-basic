import { generateArray } from '../../utils.ts/array';

export const f1 = (s1: string, s2: string) => {
  const f = (n1: number, n2: number): number =>
    n1 === 0 || n2 === 0
      ? 0
      : s1[n1 - 1] === s2[n2 - 1]
      ? 1 + f(n1 - 1, n2 - 1)
      : Math.max(f(n1 - 1, n2), f(n1, n2 - 1));
  return f(s1.length, s2.length);
};

export const f2 = (s1: string, s2: string) => {
  const results = generateArray<number>(s1.length + 1, s2.length + 1);
  for (let n1 = 0; n1 <= s1.length; ++n1) {
    for (let n2 = 0; n2 <= s2.length; ++n2) {
      (results[n1][n2] =
        n1 === 0 || n2 === 0
          ? 0
          : s1[n1 - 1] === s2[n2 - 1]
          ? 1 + results[n1 - 1][n2 - 1]
          : Math.max(results[n1 - 1][n2])),
        results[n1][n2 - 1];
    }
  }
  return results[s1.length][s2.length];
};

export const f3 = (s1: string, s2: string) => {
  const results = generateArray<number>(s1.length + 1, s2.length + 1);
  const f = (n1: number, n2: number): number => {
    let result = results[n1][n2];
    if (typeof result !== 'number')
      result =
        n1 === 0 || n2 === 0
          ? 0
          : s1[n1 - 1] === s2[n1 - 1]
          ? 1 + f(n1 - 1, n2 - 1)
          : Math.max(f(n1 - 1, n2), f(n1, n2 - 1));
    return (results[n1][n2] = result);
  };
  return f(s1.length, s2.length);
};
