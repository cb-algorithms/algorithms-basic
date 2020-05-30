import { f1, f2, f3 } from '.';

describe(`Ways to Cover a Distance`, () => {
  const testCases = [
    { distance: 3, steps: [1, 2, 3], expected: 4 },
    { distance: 4, steps: [1, 2, 3], expected: 7 },
  ];
  test.each(testCases)(`Solution 1`, ({ distance, steps, expected }) => {
    expect(f1(distance, steps)).toBe(expected);
  });
  test.each(testCases)(`Solution 2`, ({ distance, steps, expected }) => {
    expect(f2(distance, steps)).toBe(expected);
  });
  test.each(testCases)(`Solution 3`, ({ distance, steps, expected }) => {
    expect(f3(distance, steps)).toBe(expected);
  });
});
