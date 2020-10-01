export const f1 = (coins: number[]) => {
  const f = (l: number, r: number): number => {
    if (r <= l + 1) return Math.max(coins[l], coins[r]);
    return Math.max(
      coins[l] + Math.min(f(l + 2, r), f(l + 1, r - 1)),
      coins[r] + Math.min(f(l + 1, r - 1), f(l, r - 2)),
    );
  };
  return f(0, coins.length - 1);
};

console.log(
  f1([5, 3, 7, 10]),
  f1([8, 15, 3, 7]),
  f1([2, 2, 2, 2]),
  f1([20, 30, 2, 2, 2, 10]),
);
