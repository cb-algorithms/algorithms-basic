import { fibonacci1 } from '.';

describe(`Fibonacci`, () => {
  const testCases: TestCase[] = [
    { n: 1, expected: 1 },
    { n: 2, expected: 2 },
    { n: 4, expected: 5 },
    { n: 6, expected: 13 },
    { n: 8, expected: 34 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ n, expected }) => {
    expect(fibonacci1(n)).toBe(expected);
  });
});

interface TestCase {
  n: number;
  expected: number;
}
