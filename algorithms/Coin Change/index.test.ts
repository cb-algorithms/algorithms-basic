import { f1, f2, f3 } from '.';

describe(`Coin Change`, () => {
  const testCases: TestCase[] = [
    { totalCents: 4, coins: [1, 2, 3], expected: 4 },
    { totalCents: 10, coins: [2, 5, 3, 6], expected: 5 },
  ];
  test.each<TestCase>(testCases)(
    `Solution 1`,
    ({ totalCents, coins, expected }) => {
      expect(f1(coins, totalCents)).toBe(expected);
    },
  );
  test.each<TestCase>(testCases)(
    `Solution 2`,
    ({ totalCents, coins, expected }) => {
      expect(f2(coins, totalCents)).toBe(expected);
    },
  );
  test.each<TestCase>(testCases)(
    `Solution 3`,
    ({ totalCents, coins, expected }) => {
      expect(f3(coins, totalCents)).toBe(expected);
    },
  );
});

interface TestCase {
  totalCents: number;
  coins: number[];
  expected: number;
}
