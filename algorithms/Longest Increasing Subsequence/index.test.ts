import { f1, f2, f3 } from '.';

describe(`Longest Increasing Subsequence`, () => {
  const testCases: TestCase[] = [
    { arr: [3, 2], expected: 1 },
    { arr: [3, 10, 2, 1, 20], expected: 3 },
    { arr: [50, 3, 10, 7, 40, 80], expected: 4 },
    { arr: [10, 22, 9, 33, 21, 50, 41, 60, 80], expected: 6 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ arr, expected }) => {
    expect(f1(arr)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ arr, expected }) => {
    expect(f2(arr)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ arr, expected }) => {
    expect(f3(arr)).toBe(expected);
  });
});

interface TestCase {
  arr: number[];
  expected: number;
}
