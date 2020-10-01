import { f1 } from '.';

describe(`Shortest Common Supersequence`, () => {
  const testCases = [
    { s1: 'geek', s2: 'eke', expected: 'geeke' },
    { s1: 'AGGTAB', s2: 'GXTXAYB', expected: 'AGXGTXAYB' },
  ];
  test.each(testCases)(`Solution 1`, ({ s1, s2, expected }) => {
    expect(f1(s1, s2)).toBe(expected);
  });
});
