import { f1, f2, f3 } from '.';

describe(`Subset Sum`, () => {
  const testCases: TestCase[] = [
    { set: [3, 34, 4, 12, 5, 2], sum: 8, expected: true },
    { set: [3, 34, 4, 12, 5, 2], sum: 11, expected: true },
    { set: [3, 34, 4, 12, 5, 2], sum: 13, expected: false },
    { set: [3, 34, 4, 12, 5, 2], sum: 18, expected: true },
    { set: [3, 34, 4, 12, 5, 2], sum: 23, expected: true },
    { set: [3, 34, 4, 12, 5, 2], sum: 27, expected: false },
    { set: [3, 34, 4, 12, 5, 2], sum: 30, expected: false },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ set, sum, expected }) => {
    expect(f1(set, sum)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ set, sum, expected }) => {
    expect(f2(set, sum)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 3`, ({ set, sum, expected }) => {
    expect(f3(set, sum)).toBe(expected);
  });
});

interface TestCase {
  set: number[];
  sum: number;
  expected: boolean;
}
