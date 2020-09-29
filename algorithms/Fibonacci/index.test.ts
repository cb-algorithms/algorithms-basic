import { f1, f2, f3, f4, f5, f6 } from '.';

describe(`Fibonacci`, () => {
  const testCases: TestCase[] = [
    { n: 0, expected: 0 },
    { n: 1, expected: 1 },
    { n: 2, expected: 1 },
    { n: 5, expected: 5 },
    { n: 8, expected: 21 },
    { n: 11, expected: 89 },
  ];
  [f1, f2, f3, f4, f5, f6].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ n, expected }) => {
      expect(f(n)).toBe(expected);
    }),
  );
});

interface TestCase {
  n: number;
  expected: number;
}
