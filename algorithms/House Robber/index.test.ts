import rob1 from './solution1';

describe(`House Robber`, () => {
  const testCases: TestCase[] = [
    {
      amounts: [],
      expected: 0,
    },
    {
      amounts: [5, 8],
      expected: 8,
    },
    {
      amounts: [5, 8, 6],
      expected: 11,
    },
    {
      amounts: [2, 7, 9, 3, 1],
      expected: 12,
    },
    {
      amounts: [6, 7, 1, 3, 8, 2, 4],
      expected: 19,
    },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ amounts, expected }) => {
    expect(rob1(amounts)).toBe(expected);
  });
});

interface TestCase {
  amounts: number[];
  expected: number;
}
