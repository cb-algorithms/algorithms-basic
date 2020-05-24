import maxSubArray1 from './solution1';

describe(`Maximum Subarray`, () => {
  const testCases: TestCase[] = [
    {
      numbers: [],
      expected: 0,
    },
    {
      numbers: [-3, -7, -4, -8],
      expected: -3,
    },
    {
      numbers: [-9, -7, -3, -7, 0, -4, -2],
      expected: 0,
    },
    {
      numbers: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      expected: 6,
    },
    {
      numbers: [4, 8, -4, 5, -7, -6, 1, -6, 2, 9, -3, 5, -2, -7, 8, 3, -2, -6],
      expected: 15,
    },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ numbers, expected }) => {
    expect(maxSubArray1(numbers)).toBe(expected);
  });
});

interface TestCase {
  numbers: number[];
  expected: number;
}
