// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (n: number): number => {
  if (n === 0) return 1;
  return n * f1(n - 1); // not tail-call
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: tail-call optimization recursion
// References: https://medium.com/javascript-in-plain-english/javascript-optimizations-tail-call-optimization-tco-471b4f8e4f37
// -----------------------------------------------------------------------------
const fac2 = (i: number, acc: number): number => {
  if (i === 0) return acc;
  return fac2(i - 1, acc * i); // tail-call
};

export const f2 = (n: number): number => {
  return fac2(n, 1);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: simulate the internal tail code optimization
// -----------------------------------------------------------------------------
export const f3 = (n: number) => {
  let i = n;
  let acc = 1;

  /**
   * loop:
   * if (i === 0) return acc;
   * [i, acc] = [i - 1, acc * i];
   * goto loop;
   */
  loop: while (true) {
    if (i === 0) return acc;
    [i, acc] = [i - 1, acc * i];
    continue loop;
  }
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 4: Dynamic Programming - Tabulation Method (Bottom Up)
// References: https://www.geeksforgeeks.org/tabulation-vs-memoization/
// -----------------------------------------------------------------------------
export const f4 = (n: number) => {
  const results = [1];
  for (let i = 1; i <= n; ++i) {
    results[i] = i * results[i - 1];
  }
  return results[n];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 5: Optimized version of Solution 4
// -----------------------------------------------------------------------------
export const f5 = (n: number) => {
  let result = 1;
  for (let i = 1; i <= n; ++i) {
    result *= i;
  }
  return result;
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 6: Dynamic Programming - Memoization Method (Top Down)
// References: https://www.geeksforgeeks.org/tabulation-vs-memoization/
// -----------------------------------------------------------------------------
const results6: number[] = [1];

export const f6 = (n: number): number => {
  let result = results6[n];
  if (typeof result !== 'number') result = f6(n - 1) * n;
  return (results6[n] = result);
};
// -----------------------------------------------------------------------------
