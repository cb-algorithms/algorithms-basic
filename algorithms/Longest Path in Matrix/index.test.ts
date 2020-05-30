import { f1, f2 } from '.';

describe(`Longest Path in Matrix`, () => {
  const testCases = [
    {
      matrix: [
        [1, 2, 9],
        [5, 3, 8],
        [4, 6, 7],
      ],
      expected: [6, 7, 8, 9],
    },
    {
      matrix: [
        [4, 3, 10, 2],
        [5, 6, 9, 10],
        [4, 7, 8, 9],
        [4, 12, 11, 10],
      ],
      expected: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  ];
  test.each(testCases)(`Solution 1`, ({ matrix, expected }) => {
    expect(f1(matrix)).toMatchObject(expected);
  });
  test.each(testCases)(`Solution 2`, ({ matrix, expected }) => {
    expect(f2(matrix)).toMatchObject(expected);
  });
});
