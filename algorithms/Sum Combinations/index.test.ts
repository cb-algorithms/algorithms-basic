import { f1, f2, f3 } from '.';

describe(`Sum Combinations`, () => {
  const testCases = [
    { total: 6, numbers: [1, 3, 5], expected: 8 },
    { total: 9, numbers: [2, 3, 4], expected: 11 },
  ];
  test.each(testCases)(`Solution 1`, ({ total, numbers, expected }) => {
    expect(f1(total, numbers)).toBe(expected);
  });
  test.each(testCases)(`Solution 2`, ({ total, numbers, expected }) => {
    expect(f2(total, numbers)).toBe(expected);
  });
  test.each(testCases)(`Solution 3`, ({ total, numbers, expected }) => {
    expect(f3(total, numbers)).toBe(expected);
  });
});
