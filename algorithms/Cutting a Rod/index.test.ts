import { fa1, fa2, fa3, fb1, fb2, fb3 } from '.';

describe(`Cutting a Rod`, () => {
  const testCases: TestCase[] = [
    { prices: [2, 4, 9, 10, 12, 15], expected: 18 },
    { prices: [1, 5, 8, 9, 10, 17, 17, 20], expected: 22 },
    { prices: [3, 5, 8, 9, 10, 17, 17, 20], expected: 24 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ prices, expected }) => {
    expect(fa1(prices)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ prices, expected }) => {
    expect(fa2(prices)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ prices, expected }) => {
    expect(fa3(prices)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 4`, ({ prices, expected }) => {
    expect(fb1(prices)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 5`, ({ prices, expected }) => {
    expect(fb2(prices)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 6`, ({ prices, expected }) => {
    expect(fb3(prices)).toBe(expected);
  });
});

interface TestCase {
  prices: number[];
  expected: number;
}
