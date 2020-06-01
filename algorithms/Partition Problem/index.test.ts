import { f1, f2, f3 } from '.';

describe(`Partition Problem`, () => {
  const testCases = [
    { arr: [1, 5, 11, 5], expected: true },
    { arr: [1, 5, 3], expected: false },
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
});
