import { f1, f2, f3 } from '.';

describe(`Longest Common Subsequence`, () => {
  const testCases: TestCase[] = [
    {
      s1: 'ABCDGH',
      s2: 'AEDFHR',
      expected: 3,
    },
    {
      s1: 'AGGTAB',
      s2: 'GXTXAYB',
      expected: 4,
    },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ s1, s2, expected }) => {
    expect(f1(s1, s2)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ s1, s2, expected }) => {
    expect(f2(s1, s2)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ s1, s2, expected }) => {
    expect(f3(s1, s2)).toBe(expected);
  });
});

interface TestCase {
  s1: string;
  s2: string;
  expected: number;
}
