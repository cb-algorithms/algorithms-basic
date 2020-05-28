import { f1, f2, f3 } from '.';

describe(`Longest Repeated Subsequence`, () => {
  const testCases: TestCase[] = [
    { s: 'aab', expected: 'a' },
    { s: 'aabb', expected: 'ab' },
    { s: 'AABEBCDD', expected: 'ABD' },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ s, expected }) => {
    expect(f1(s)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ s, expected }) => {
    expect(f2(s)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ s, expected }) => {
    expect(f3(s)).toBe(expected);
  });
});

interface TestCase {
  s: string;
  expected: string;
}
