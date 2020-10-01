import { fa1, fa2, fa3, fb1, fb2, fb3 } from '.';

describe(`Cutting a Rod`, () => {
  const testCases: TestCase[] = [
    { prices: [2, 4, 9, 10, 12, 15], expected: 18 },
    { prices: [1, 5, 8, 9, 10, 17, 17, 20], expected: 22 },
    { prices: [3, 5, 8, 9, 10, 17, 17, 20], expected: 24 },
  ];
  [fa1, fa2, fa3, fb1, fb2, fb3].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ prices, expected }) => {
      expect(f(prices)).toBe(expected);
    }),
  );
});

interface TestCase {
  prices: number[];
  expected: number;
}
