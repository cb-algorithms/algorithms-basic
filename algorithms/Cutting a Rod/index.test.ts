import { f1, f2, f3 } from '.';

describe(`Cutting a Rod`, () => {
  const testCases: TestCase[] = [
    { prices: [1, 5, 8, 9, 10, 17, 17, 20], expected: 22 },
    { prices: [3, 5, 8, 9, 10, 17, 17, 20], expected: 24 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ prices, expected }) => {
    expect(f1(prices)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ prices, expected }) => {
    expect(f2(prices)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ prices, expected }) => {
    expect(f3(prices)).toBe(expected);
  });
});

interface TestCase {
  prices: number[];
  expected: number;
}
