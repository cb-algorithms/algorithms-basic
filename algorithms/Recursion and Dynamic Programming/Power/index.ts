export const f1 = (x: number, y: number) => {
  let result = 1;
  for (let i = 0; i < y; ++i) {
    result *= x;
  }
  return result;
};

export const f2 = (x: number, y: number): number => {
  if (y === 0) return 1;
  if (y % 2 === 0) return f2(x, y / 2) * f2(x, y / 2);
  return x * f2(x, (y - 1) / 2) * f2(x, (y - 1) / 2);
};

export const f3 = (x: number, y: number): number => {
  if (y === 0) return 1;
  const halfY = y % 2 === 0 ? y / 2 : (y - 1) / 2;
  const sub = f3(x, halfY);
  return y % 2 === 0 ? sub * sub : x * sub * sub;
};

console.log(f1(2, 5), f2(2, 5), f3(2, 5));
console.log(f1(3, 6), f2(3, 6), f3(3, 6));
