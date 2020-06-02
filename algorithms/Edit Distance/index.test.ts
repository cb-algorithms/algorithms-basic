import { f1, f2, f3 } from '.';

describe(`Edit Distance`, () => {
  const testCases = [
    { s1: 'geek', s2: 'gesek', expected: 1 },
    { s1: 'cut', s2: 'cat', expected: 1 },
    { s1: 'sunday', s2: 'saturday', expected: 3 },
    { s1: 'thought', s2: 'through', expected: 2 },
  ];
  test.each(testCases)(`Solution 1`, ({ s1, s2, expected }) => {
    expect(f1(s1, s2)).toBe(expected);
  });
  test.each(testCases)(`Solution 2`, ({ s1, s2, expected }) => {
    expect(f2(s1, s2)).toBe(expected);
  });
  test.each(testCases)(`Solution 2`, ({ s1, s2, expected }) => {
    expect(f3(s1, s2)).toBe(expected);
  });
});
