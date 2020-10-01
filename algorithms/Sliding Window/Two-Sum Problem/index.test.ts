import { f1, f2 } from '.';

describe(`Two-Sum Problem`, () => {
  const testCases = [
    { array: [1, 2, 3], total: 4, expected: [1, 3] },
    { array: [3, 9, 12, 20], total: 21, expected: [9, 12] },
  ];
  test.each(testCases)(`Solution 1`, ({ array, total, expected }) => {
    expect(f1(array, total)).toEqual(expect.arrayContaining(expected));
  });
  test.each(testCases)(`Solution 2`, ({ array, total, expected }) => {
    expect(f2(array, total)).toEqual(expect.arrayContaining(expected));
  });
});
