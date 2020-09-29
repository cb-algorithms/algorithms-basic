import { fa1, fa2, fa3, fb1, fb2, fb3 } from '.';

describe(`Longest Increasing Subsequence`, () => {
  const testCases: TestCase[] = [
    { arr: [3, 2], expected: 1 },
    { arr: [3, 10, 2, 1, 20, 5], expected: 3 },
    { arr: [50, 3, 10, 7, 40, 80, 26], expected: 4 },
    { arr: [10, 22, 9, 33, 21, 50, 41, 60, 80, 24], expected: 6 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ arr, expected }) => {
    expect(fa1(arr)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ arr, expected }) => {
    expect(fa2(arr)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ arr, expected }) => {
    expect(fa3(arr)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 4`, ({ arr, expected }) => {
    expect(fb1(arr)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 5`, ({ arr, expected }) => {
    expect(fb2(arr)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 6`, ({ arr, expected }) => {
    expect(fb3(arr)).toBe(expected);
  });
});

interface TestCase {
  arr: number[];
  expected: number;
}
