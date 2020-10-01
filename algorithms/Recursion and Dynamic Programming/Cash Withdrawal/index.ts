// -----------------------------------------------------------------------------
// Problem 1: Unlimited amount of cash in each face value
// -----------------------------------------------------------------------------
export const fa = (values: number[], total: number) => {
  const f = (n: number, t: number, c: number[]): boolean => {
    if (t === 0) return true;
    if (n === 0) return false;
    if (t >= values[n - 1] && f(n, t - values[n - 1], c)) {
      c.push(values[n - 1]);
      return true;
    }
    return f(n - 1, t, c);
  };
  const results: number[] = [];
  return f(values.length, total, results) && results;
};

console.log(fa([10000, 20000, 50000, 100000, 200000, 500000], 990000));

// -----------------------------------------------------------------------------
// Problem 2: Limited amount of cash in each face value
// See also: Subset Sum Problem
// -----------------------------------------------------------------------------
interface CashValue {
  value: number;
  count: number;
}

export const fb = (cashValues: CashValue[], total: number) => {
  const values = cashValues.flatMap(({ count, value }) =>
    Array.from({ length: count }, () => value),
  );
  const f = (n: number, t: number, c: number[]): boolean => {
    if (t === 0) return true;
    if (n === 0) return false;
    if (t >= values[n - 1] && f(n - 1, t - values[n - 1], c)) {
      c.push(values[n - 1]);
      return true;
    }
    return f(n - 1, t, c);
  };
  const results: number[] = [];
  return f(values.length, total, results) && results;
};

console.log(
  fb(
    [
      { value: 500000, count: 2 },
      { value: 200000, count: 4 },
      { value: 100000, count: 1 },
    ],
    1_500_000,
  ),
);
