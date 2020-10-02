import { generateArray } from '../../../utils/array';

export const f1 = (totalLength: number) => {
  const f = (n: number, length: number): number => {
    return n === 0
      ? length === totalLength
        ? 0
        : length
      : Math.max((length - n) * f(n - 1, n), f(n - 1, length));
  };

  return f(totalLength - 1, totalLength);
};

export const f2 = (totalLength: number) => {
  const results = generateArray<number>(totalLength, totalLength + 1);

  for (let n = 0; n < totalLength; ++n) {
    for (let length = 1; length <= totalLength; ++length) {
      results[n][length] =
        n === 0
          ? length === totalLength
            ? 0
            : length
          : Math.max((length - n) * results[n - 1][n], results[n - 1][length]);
    }
  }

  return results[totalLength - 1][totalLength];
};

export const f3 = (totalLength: number) => {
  const results = generateArray<number>(totalLength, totalLength + 1);

  const f = (n: number, length: number): number => {
    let result = results[n][length];
    if (typeof result === 'number') return result;

    return (results[n][length] =
      n === 0
        ? length === totalLength
          ? 0
          : length
        : Math.max((length - n) * f(n - 1, n), f(n - 1, length)));
  };

  return f(totalLength - 1, totalLength);
};

export const f4 = (totalLength: number) => {
  const f = (n: number): number => {
    if (n === 0 || n === 1) return 0;
    let max = 0;
    for (let i = 1; i < n; ++i) {
      max = Math.max(max, i * (n - i), i * f(n - i));
    }
    return max;
  };

  return f(totalLength);
};

export const f5 = (totalLength: number) => {
  const results = generateArray<number>(totalLength + 1);
  results[0] = results[1] = 0;

  for (let n = 2; n <= totalLength; ++n) {
    let max = 0;
    for (let i = 1; i < n; ++i) {
      max = Math.max(max, i * (n - i), i * results[n - i]);
    }
    results[n] = max;
  }

  return results[totalLength];
};

export const f6 = (totalLength: number) => {
  const results = generateArray<number>(totalLength + 1);
  results[0] = results[1] = 0;

  const f = (n: number) => {
    let result = results[n];
    if (typeof result === 'number') return result;
    result = 0;
    for (let i = 1; i < n; ++i) {
      result = Math.max(result, i * (n - i), i * f(n - i));
    }
    return (results[n] = result);
  };

  return f(totalLength);
};

// console.log(f1(2), f4(2));
// console.log(f1(3), f4(3));
// console.log(f1(4), f4(4));
// console.log(f1(5), f4(5));
// console.log(f1(10), f4(10));
// console.log(f1(15), f4(15));
// console.log(f1(20));

/**
 * f(2, 3) = max(1 * f(1, 2), f(1, 3));
 * f(1, 3) = max(2 * f(0, 1), f(0, 3)) = max(2 * 1, 3);
 */
