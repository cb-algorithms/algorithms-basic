import { generateArray } from '../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (n: number): number =>
  n < 2 ? 1 : f1(n - 1) + (n - 1) * f1(n - 2);
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: tail-call optimization recursion
// -----------------------------------------------------------------------------
const fi2 = (i: number, curr: number, prev: number): number => {
  if (i === 1) return curr;
  if (i === 0) return prev;
  return fi2(i - 1, curr + (i - 1) * prev, curr);
};

export const f2 = (n: number) => fi2(n, 1, 1);
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: simulate the internal tail code optimization
// -----------------------------------------------------------------------------
export const f3 = (n: number) => {
  let i = n;
  let curr = 1;
  let prev = 1;

  /**
   * loop:
   * if (i === 1) return curr;
   * if (i === 0) return prev;
   * [i, curr, prev] = [i - 1, curr + (i - 1) * prev, curr];
   * continue loop;
   */
  loop: while (true) {
    if (i === 1) return curr;
    if (i === 0) return prev;
    [i, curr, prev] = [i - 1, curr + (i - 1) * prev, curr];
    continue loop;
  }
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 4: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f4 = (n: number) => {
  const results = generateArray<number>(n);
  results[0] = 1;
  results[1] = 1;

  for (let i = 2; i <= n; ++i) {
    results[i] = results[i - 1] + (i - 1) * results[i - 2];
  }

  return results[n];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 5: Optimized version of Solution 4
// -----------------------------------------------------------------------------
export const f5 = (n: number) => {
  let curr = 1;
  let prev = 1;

  if (n === 1) return curr;
  if (n === 0) return prev;

  for (let i = 2; i <= n; ++i) {
    [curr, prev] = [curr + (i - 1) * prev, curr];
  }

  return curr;
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 6: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f6 = (n: number) => {
  const results = generateArray<number>(n);
  results[0] = 1;
  results[1] = 1;

  const f = (i: number): number => {
    let result = results[i];
    if (typeof result !== 'number') result = f(i - 1) + (i - 1) * f(i - 2);
    return (results[i] = result);
  };

  return f(n);
};
// -----------------------------------------------------------------------------
