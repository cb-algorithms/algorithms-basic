import { f1 } from '.';

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
  [f1].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ amounts, expected }) => {
      expect(f(amounts)).toBe(expected);
    }),
  );
});

interface TestCase {
  amounts: number[];
  expected: number;
}
