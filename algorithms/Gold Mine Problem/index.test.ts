import { goldMine1, goldMine2, goldMine3 } from '.';

describe(`Gold Mine Problem`, () => {
  const testCases: TestCase[] = [
    {
      matrix: [
        [1, 3, 3],
        [2, 1, 4],
        [0, 6, 4],
      ],
      row: 3,
      col: 3,
      expected: 12,
    },
    {
      matrix: [
        [1, 3, 1, 5],
        [2, 2, 4, 1],
        [5, 0, 2, 3],
        [0, 6, 1, 2],
      ],
      row: 4,
      col: 4,
      expected: 16,
    },
    {
      matrix: [
        [10, 33, 13, 15],
        [22, 21, 4, 1],
        [5, 0, 2, 3],
        [0, 6, 14, 2],
      ],
      row: 4,
      col: 4,
      expected: 83,
    },
  ];
  test.each<TestCase>(testCases)(
    `Solution 1`,
    ({ matrix, row, col, expected }) => {
      expect(goldMine1(matrix, row, col)).toBe(expected);
    },
  );
  test.each<TestCase>(testCases)(
    `Solution 2`,
    ({ matrix, row, col, expected }) => {
      expect(goldMine2(matrix, row, col)).toBe(expected);
    },
  );
  test.each<TestCase>(testCases)(
    `Solution 3`,
    ({ matrix, row, col, expected }) => {
      expect(goldMine3(matrix, row, col)).toBe(expected);
    },
  );
});

interface TestCase {
  matrix: number[][];
  row: number;
  col: number;
  expected: number;
}
