export const fibonacci1 = (n: number): number => {
  if (n < 3) return n;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
};

const fibonacci2Internal = (
  i: number,
  prev_1: number,
  prev_2: number,
): number => {
  if (i === 1) return prev_1;
  if (i === 0) return prev_2;
  return fibonacci2Internal(i - 1, prev_1 + prev_2, prev_1);
};

export const fibonacci2 = (n: number) => {
  return fibonacci2Internal(n, 1, 0);
};
