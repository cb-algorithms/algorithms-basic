import { f1, f2, f3, f4, f5, f6 } from '.';

describe(`Factorial`, () => {
  const testCases: TestCase[] = [
    { n: 0, expected: 1 },
    { n: 1, expected: 1 },
    { n: 3, expected: 6 },
    { n: 5, expected: 120 },
    { n: 7, expected: 5040 },
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
