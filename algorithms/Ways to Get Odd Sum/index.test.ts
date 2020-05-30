import { f1, f2, f3 } from '.';

describe(`Ways to Get Odd Sum`, () => {
  const testCases = [
    {
      lists: [
        [3, 4],
        [1, 2],
      ],
      expected: 2,
    },
    {
      lists: [
        [2, 2],
        [2, 2],
      ],
      expected: 0,
    },
    {
      lists: [
        [2, 2, 3],
        [2, 1],
        [3, 0],
      ],
      expected: 6,
    },
  ];
  test.each(testCases)(`Solution 1`, ({ lists, expected }) => {
    expect(f1(lists)).toBe(expected);
  });
  test.each(testCases)(`Solution 2`, ({ lists, expected }) => {
    expect(f2(lists)).toBe(expected);
  });
  test.each(testCases)(`Solution 3`, ({ lists, expected }) => {
    expect(f3(lists)).toBe(expected);
  });
});
