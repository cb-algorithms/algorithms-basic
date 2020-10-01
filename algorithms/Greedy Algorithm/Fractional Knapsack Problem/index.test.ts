import { Item, f1 } from '.';

describe(`Fractional Knapsack Problem`, () => {
  const testCases: TestCase[] = [
    {
      items: [
        { value: 60, weight: 10 },
        { value: 100, weight: 20 },
        { value: 120, weight: 30 },
      ],
      totalWeight: 50,
      expected: 240,
    },
  ];
  [f1].forEach((f, i) =>
    test.each(testCases)(
      `Solution ${i + 1}`,
      ({ items, totalWeight, expected }) => {
        expect(f(items, totalWeight)).toBe(expected);
      },
    ),
  );
});

interface TestCase {
  items: Item[];
  totalWeight: number;
  expected: number;
}
