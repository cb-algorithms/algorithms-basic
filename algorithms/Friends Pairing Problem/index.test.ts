import { f1, f2, f3, f4, f5, f6 } from '.';

describe(`Friends Pairing`, () => {
  const testCases: TestCase[] = [
    { n: 0, expected: 1 },
    { n: 1, expected: 1 },
    { n: 2, expected: 2 },
    { n: 3, expected: 4 },
    { n: 4, expected: 10 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ n, expected }) => {
    expect(f1(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ n, expected }) => {
    expect(f2(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ n, expected }) => {
    expect(f3(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 4`, ({ n, expected }) => {
    expect(f4(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 5`, ({ n, expected }) => {
    expect(f5(n)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 6`, ({ n, expected }) => {
    expect(f6(n)).toBe(expected);
  });
});

interface TestCase {
  n: number;
  expected: number;
}
