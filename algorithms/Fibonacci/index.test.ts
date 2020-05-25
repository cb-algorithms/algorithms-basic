import { fibonacci1, fibonacci2, fibonacci3, fibonacci4, fibonacci5, fibonacci6 } from '.';

describe(`Fibonacci`, () => {
  const testCases: TestCase[] = [
    { n: 0, expected: 0 },
    { n: 1, expected: 1 },
    { n: 2, expected: 1 },
    { n: 5, expected: 5 },
    { n: 8, expected: 21 },
    { n: 11, expected: 89 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ n, expected }) => {
    expect(fibonacci1(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ n, expected }) => {
    expect(fibonacci2(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ n, expected }) => {
    expect(fibonacci3(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 4`, ({ n, expected }) => {
    expect(fibonacci4(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 5`, ({ n, expected }) => {
    expect(fibonacci5(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 6`, ({ n, expected }) => {
    expect(fibonacci6(n)).toBe(expected);
  });
});

interface TestCase {
  n: number;
  expected: number;
}
