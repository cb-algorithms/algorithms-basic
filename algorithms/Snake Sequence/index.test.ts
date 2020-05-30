import { f1, f2, f3 } from '.';

describe(`Snake Sequence`, () => {
  const testCases: TestCase[] = [
    {
      matrix: [
        [9, 6, 5, 2],
        [8, 7, 6, 5],
        [7, 3, 1, 6],
        [1, 1, 1, 7],
      ],
      expected: [9, 8, 7, 6, 5, 6, 7],
    },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ matrix, expected }) => {
    expect(f1(matrix)).toMatchObject(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ matrix, expected }) => {
    expect(f2(matrix)).toMatchObject(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ matrix, expected }) => {
    expect(f3(matrix)).toMatchObject(expected);
  });
});

interface TestCase {
  matrix: number[][];
  expected: number[];
}
