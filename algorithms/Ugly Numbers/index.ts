import { generateArray } from '../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: brute force
// -----------------------------------------------------------------------------
const exhaustiveDivide = (n: number, dividend: number) => {
  for (; n % dividend === 0; n /= dividend);
  return n;
};

const isUglyNumber = (n: number) => {
  n = exhaustiveDivide(n, 2);
  n = exhaustiveDivide(n, 3);
  n = exhaustiveDivide(n, 5);
  return n === 1;
};

export const uglyNumber1 = (nth: number) => {
  let count = 1;
  let n = 1;
  while (count < nth) {
    for (n += 1; !isUglyNumber(n); ++n);
    ++count;
  }
  return n;
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const uglyNumber2 = (nth: number) => {
  const results = generateArray<number>(nth + 1);
  results[0] = 1;
  let i2 = 0,
    i3 = 0,
    i5 = 0;
  let next_x2 = results[i2] * 2,
    next_x3 = results[i3] * 3,
    next_x5 = results[i5] * 5;

  for (let i = 1; i < nth; ++i) {
    const result = Math.min(next_x2, next_x3, next_x5);
    results[i] = result;
    if (result === next_x2) {
      ++i2;
      next_x2 = results[i2] * 2;
    }
    if (result === next_x3) {
      ++i3;
      next_x3 = results[i3] * 3;
    }
    if (result === next_x5) {
      ++i5;
      next_x5 = results[i5] * 5;
    }
  }

  return results[nth - 1];
};
// -----------------------------------------------------------------------------
