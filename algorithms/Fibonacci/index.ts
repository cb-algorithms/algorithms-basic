// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const fibonacci1 = (n: number): number => {
  if (n === 1) return 1;
  if (n === 0) return 0;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: tail-call optimization recursion
// References: https://www.geeksforgeeks.org/tail-recursion-fibonacci/
// -----------------------------------------------------------------------------
const fib2 = (i: number, curr: number, prev: number): number => {
  if (i === 1) return curr;
  if (i === 0) return prev;
  return fib2(i - 1, curr + prev, curr);
};

export const fibonacci2 = (n: number) => {
  return fib2(n, 1, 0);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: simulate the internal tail code optimization
// -----------------------------------------------------------------------------
export const fibonacci3 = (n: number) => {
  let i = n;
  let curr = 1;
  let prev = 0;

  /**
   * iterate:
   * if (i === 1) return prev_1;
   * if (i === 0) return prev_2;
   * [i, prev_1, prev_2] = [i - 1, prev_1 + prev_2, prev_1];
   * goto iterate;
   */
  iterate: while (true) {
    if (i === 1) return curr;
    if (i === 0) return prev;
    [i, curr, prev] = [i - 1, curr + prev, curr];
    continue iterate;
  }
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 4: Dynamic Programming - Tabulation Method (Bottom Up)
// References: https://www.geeksforgeeks.org/dynamic-programming/
// -----------------------------------------------------------------------------
export const fibonacci4 = (n: number) => {
  const results = [0, 1];
  for (let i = 2; i <= n; ++i) {
    results[i] = results[i - 1] + results[i - 2];
  }
  return results[n];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 5: Optimized version of Solution 4
// -----------------------------------------------------------------------------
export const fibonacci5 = (n: number) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let curr = 1;
  let prev = 0;

  for (let i = 2; i <= n; ++i) {
    [curr, prev] = [curr + prev, curr];
  }

  return curr;
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 6: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
const results6: number[] = [0, 1];

export const fibonacci6 = (n: number): number => {
  let result = results6[n];
  if (typeof results6[n] !== 'number')
    result = fibonacci6(n - 1) + fibonacci6(n - 2);
  return (results6[n] = result);
};
// -----------------------------------------------------------------------------
