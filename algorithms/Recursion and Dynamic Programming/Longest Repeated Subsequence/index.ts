import { whichHasMaxLength } from '../../../utils.ts/common';
import { generateArray } from '../../../utils.ts/array';

export const f1 = (s: string) => {
  const f = (n1: number, n2: number): string =>
    n1 === 0 || n2 === 0
      ? ''
      : n1 !== n2 && s[n1 - 1] === s[n2 - 1]
      ? f(n1 - 1, n2 - 1) + s[n1 - 1]
      : whichHasMaxLength(f(n1 - 1, n2), f(n1, n2 - 1));
  return f(s.length, s.length - 1);
};

export const f2 = (s: string) => {
  const results = generateArray<string>(s.length + 1, s.length);

  for (let n1 = 0; n1 <= s.length; ++n1) {
    for (let n2 = 0; n2 < s.length; ++n2) {
      results[n1][n2] =
        n1 === 0 || n2 === 0
          ? ''
          : n1 !== n2 && s[n1 - 1] === s[n2 - 1]
          ? results[n1 - 1][n2 - 1] + s[n1 - 1]
          : whichHasMaxLength(results[n1 - 1][n2], results[n1][n2 - 1]);
    }
  }

  return results[s.length][s.length - 1];
};

export const f3 = (s: string) => {
  const results = generateArray<string>(s.length + 1, s.length);

  const f = (n1: number, n2: number) => {
    let result = results[n1][n2];

    if (typeof result !== 'string')
      result =
        n1 === 0 || n2 === 0
          ? ''
          : n1 !== n2 && s[n1 - 1] === s[n2 - 1]
          ? f(n1 - 1, n2 - 1) + s[n1 - 1]
          : whichHasMaxLength(f(n1 - 1, n2), f(n1, n2 - 1));

    return (results[n1][n2] = result);
  };

  return f(s.length, s.length - 1);
};
