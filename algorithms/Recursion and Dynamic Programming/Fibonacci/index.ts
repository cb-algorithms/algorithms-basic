import { generateArray } from '../../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (number: number) => {
  const f = (n: number): number => (n <= 1 ? n : f(n - 1) + f(n - 2));
  return f(number);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: tail-call optimization recursion
// -----------------------------------------------------------------------------

export const f2 = (n: number) => {
  const f = (i: number, curr: number, prev: number): number => {
    if (i === 1) return curr;
    if (i === 0) return prev;
    return f(i - 1, curr + prev, curr);
  };
  return f(n, 1, 0);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: simulate the internal tail code optimization
// -----------------------------------------------------------------------------
export const f3 = (n: number) => {
  let i = n;
  let curr = 1;
  let prev = 0;

  /**
   * loop:
   * if (i === 1) return prev_1;
   * if (i === 0) return prev_2;
   * [i, prev_1, prev_2] = [i - 1, prev_1 + prev_2, prev_1];
   * goto loop;
   */
  loop: while (true) {
    if (i === 1) return curr;
    if (i === 0) return prev;
    [i, curr, prev] = [i - 1, curr + prev, curr];
    continue loop;
  }
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 4: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f4 = (number: number) => {
  const results = generateArray<number>(number + 1);
  for (let n = 0; n <= number; ++n) {
    results[n] = n <= 1 ? n : results[n - 1] + results[n - 2];
  }
  return results[number];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 5: Optimized version of Solution 4
// -----------------------------------------------------------------------------
export const f5 = (n: number) => {
  let curr = 1;
  let prev = 0;

  if (n === 1) return curr;
  if (n === 0) return prev;

  for (let i = 2; i <= n; ++i) {
    [curr, prev] = [curr + prev, curr];
  }

  return curr;
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 6: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f6 = (number: number) => {
  const results = generateArray<number>(number + 1);
  const f = (n: number): number => {
    let result = results[n];
    if (typeof result !== 'number') result = n <= 1 ? n : f(n - 1) + f(n - 2);
    return (results[n] = result);
  };
  return f(number);
};
// -----------------------------------------------------------------------------
