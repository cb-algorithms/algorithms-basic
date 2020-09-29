import { f1, f2, f3 } from '.';

describe(`Triple Step`, () => {
  const testCases: TestCase[] = [
    { steps: 1, expected: 1 }, // {1}
    { steps: 2, expected: 2 }, // {1,1}, {2}
    { steps: 3, expected: 4 }, // {1,1,1}, {1,2}, {2,1}, {3}
    { steps: 4, expected: 7 }, // {1,1,1,1}, {1,1,2}, {1,2,1}, {2,1,1}, {1,3}, {3,1}, {2, 2}
  ];
  [f1, f2, f3].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ steps, expected }) => {
      expect(f(steps)).toBe(expected);
    }),
  );
});

interface TestCase {
  steps: number;
  expected: number;
}
