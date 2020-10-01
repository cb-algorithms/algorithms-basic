import trap1 from './solution1';
import trap2 from './solution2';
import trap3 from './solution3';

describe(`Trapping Rain Water`, () => {
  const testCases: TestCase[] = [
    {
      heights: [],
      expected: 0,
    },
    {
      heights: [4],
      expected: 0,
    },
    {
      heights: [4, 2],
      expected: 0,
    },
    {
      heights: [2, 0, 2],
      expected: 2,
    },
    {
      heights: [3, 0, 2, 0, 4],
      expected: 7,
    },
    {
      heights: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      expected: 6,
    },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ heights, expected }) => {
    expect(trap1(heights)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ heights, expected }) => {
    expect(trap2(heights)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ heights, expected }) => {
    expect(trap3(heights)).toBe(expected);
  });
});

interface TestCase {
  heights: number[];
  expected: number;
}
