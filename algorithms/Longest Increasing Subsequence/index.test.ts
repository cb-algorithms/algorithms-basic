import { fa1, fa2, fa3, fb1, fb2, fb3 } from '.';

describe(`Longest Increasing Subsequence`, () => {
  const testCases: TestCase[] = [
    { arr: [3, 2], expected: 1 },
    { arr: [3, 10, 2, 1, 20, 5], expected: 3 },
    { arr: [50, 3, 10, 7, 40, 80, 26], expected: 4 },
    { arr: [10, 22, 9, 33, 21, 50, 41, 60, 80, 24], expected: 6 },
  ];
  [fa1, fa2, fa3, fb1, fb2, fb3].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ arr, expected }) => {
      expect(f(arr)).toBe(expected);
    }),
  );
});

interface TestCase {
  arr: number[];
  expected: number;
}
