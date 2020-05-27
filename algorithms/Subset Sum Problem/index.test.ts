import { f1, f2, f3 } from '.';

describe(`Subset Sum`, () => {
  const testCases: TestCase[] = [
    { set: [3, 34, 4, 12, 5, 2], totalSum: 9, expected: true },
    { set: [3, 34, 4, 12, 5, 2], totalSum: 30, expected: false },
  ];
  test.each<TestCase>(testCases)(
    `Solution 1`,
    ({ set, totalSum, expected }) => {
      expect(f1(set, totalSum)).toBe(expected);
    },
  );
  test.each<TestCase>(testCases)(
    `Solution 2`,
    ({ set, totalSum, expected }) => {
      expect(f2(set, totalSum)).toBe(expected);
    },
  );
  test.each<TestCase>(testCases)(
    `Solution 3`,
    ({ set, totalSum, expected }) => {
      expect(f3(set, totalSum)).toBe(expected);
    },
  );
});

interface TestCase {
  set: number[];
  totalSum: number;
  expected: boolean;
}
