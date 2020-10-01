import { f1, f2, f3 } from '.';

describe(`Coin Change`, () => {
  const testCases: TestCase[] = [
    { total: 4, coins: [1, 2, 3], expected: 4 },
    { total: 10, coins: [2, 5, 3, 6], expected: 5 },
    { total: 6, coins: [1, 2, 3], expected: 7 },
  ];
  [f1, f2, f3].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ total, coins, expected }) => {
      expect(f(coins, total)).toBe(expected);
    }),
  );
});

interface TestCase {
  total: number;
  coins: number[];
  expected: number;
}
