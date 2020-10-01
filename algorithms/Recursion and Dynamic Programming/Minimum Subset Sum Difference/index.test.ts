import { f1, f2, f3, f4 } from '.';

describe(`Minimum Subset Sum Difference`, () => {
  const testCases = [
    { arr: [2, 9], expected: 7 },
    { arr: [6, 7, 3], expected: 2 },
    { arr: [1, 6, 11, 5], expected: 1 },
    { arr: [10, 8, 2, 12, 16], expected: 0 },
    { arr: [3, 12, 8, 2, 7, 15], expected: 1 },
  ];
  test.each(testCases)(`Solution 1`, ({ arr, expected }) => {
    expect(f1(arr)).toBe(expected);
  });
  test.each(testCases)(`Solution 2`, ({ arr, expected }) => {
    expect(f2(arr)).toBe(expected);
  });
  test.each(testCases)(`Solution 3`, ({ arr, expected }) => {
    expect(f3(arr)).toBe(expected);
  });
  test.each(testCases)(`Solution 4`, ({ arr, expected }) => {
    expect(f4(arr)).toBe(expected);
  });
});
