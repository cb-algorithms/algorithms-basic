import { f1, f2, f3, f4, f5, f6 } from '.';

describe(`Maximum Product Cutting`, () => {
  const testCases = [
    { totalLength: 2, expected: 1 },
    { totalLength: 3, expected: 2 },
    { totalLength: 4, expected: 4 },
    { totalLength: 5, expected: 6 },
    { totalLength: 10, expected: 36 },
    { totalLength: 15, expected: 243 },
    { totalLength: 20, expected: 1458 },
  ];
  test.each(testCases)(`Solution 1`, ({ totalLength, expected }) => {
    expect(f1(totalLength)).toBe(expected);
  });
  test.each(testCases)(`Solution 2`, ({ totalLength, expected }) => {
    expect(f2(totalLength)).toBe(expected);
  });
  test.each(testCases)(`Solution 3`, ({ totalLength, expected }) => {
    expect(f3(totalLength)).toBe(expected);
  });
  test.each(testCases)(`Solution 4`, ({ totalLength, expected }) => {
    expect(f4(totalLength)).toBe(expected);
  });
  test.each(testCases)(`Solution 5`, ({ totalLength, expected }) => {
    expect(f5(totalLength)).toBe(expected);
  });
  test.each(testCases)(`Solution 6`, ({ totalLength, expected }) => {
    expect(f6(totalLength)).toBe(expected);
  });
});
