// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const factorial1 = (n: number): number => {
  if (n === 0) return 1;
  return n * factorial1(n - 1); // not tail-call
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: tail-call optimization recursion
// References: https://medium.com/javascript-in-plain-english/javascript-optimizations-tail-call-optimization-tco-471b4f8e4f37
// -----------------------------------------------------------------------------
const factorial2Internal = (i: number, acc: number): number => {
  if (i === 0) return acc;
  return factorial2Internal(i - 1, acc * i); // tail-call
};

export const factorial2 = (n: number): number => {
  return factorial2Internal(n, 1);
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: simulate the internal tail code optimization
// -----------------------------------------------------------------------------
export const factorial3 = (n: number) => {
  let i = n;
  let acc = 1;

  /**
   * iterate:
   * if (i === 0) return acc;
   * [i, acc] = [i - 1, acc * i];
   * goto iterate;
   */
  iterate: while (true) {
    if (i === 0) return acc;
    [i, acc] = [i - 1, acc * i];
    continue iterate;
  }
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 4: convert recursion to dynamic programming
// -----------------------------------------------------------------------------
export const factorial4 = (n: number) => {
  const results = [1];

  for (let i = 1; i <= n; ++i) {
    results[i] = i * results[i - 1];
  }

  return results[n];
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 5: optimized version of dynamic programming
// -----------------------------------------------------------------------------
export const factorial5 = (n: number) => {
  let result = 1;

  for (let i = 1; i <= n; ++i) {
    result *= i;
  }

  return result;
};
// -----------------------------------------------------------------------------
