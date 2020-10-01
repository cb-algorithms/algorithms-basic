import { f1, f2, f3 } from '.';

describe(`Knapsack Problem`, () => {
  const testCases: TestCase[] = [
    {
      totalItem: 0,
      values: [],
      weights: [],
      totalWeight: 250,
      expected: 0,
    },
    {
      totalItem: 1,
      values: [40],
      weights: [280],
      totalWeight: 120,
      expected: 0,
    },
    {
      totalItem: 1,
      values: [70],
      weights: [90],
      totalWeight: 120,
      expected: 70,
    },
    {
      totalItem: 3,
      values: [60, 100, 120],
      weights: [10, 20, 30],
      totalWeight: 50,
      expected: 220,
    },
    {
      totalItem: 7,
      values: [40, 30, 80, 10, 140, 50, 90],
      weights: [30, 30, 10, 20, 40, 80, 60],
      totalWeight: 150,
      expected: 350,
    },
  ];
  [f1, f2, f3].forEach((f, i) =>
    test.each(testCases)(
      `Solution ${i + 1}`,
      ({ totalItem, values, weights, totalWeight, expected }) => {
        expect(f(totalItem, values, weights, totalWeight)).toBe(expected);
      },
    ),
  );
});

interface TestCase {
  totalItem: number;
  values: number[];
  weights: number[];
  totalWeight: number;
  expected: number;
}
