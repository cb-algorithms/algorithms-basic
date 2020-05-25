import { factorial1, factorial2, factorial3, factorial4, factorial5 } from '.';

describe(`Factorial`, () => {
  const testCases: TestCase[] = [
    { n: 0, expected: 1 },
    { n: 1, expected: 1 },
    { n: 3, expected: 6 },
    { n: 5, expected: 120 },
    { n: 7, expected: 5040 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ n, expected }) => {
    expect(factorial1(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ n, expected }) => {
    expect(factorial2(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ n, expected }) => {
    expect(factorial3(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 4`, ({ n, expected }) => {
    expect(factorial4(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 5`, ({ n, expected }) => {
    expect(factorial5(n)).toBe(expected);
  });
});

interface TestCase {
  n: number;
  expected: number;
}
