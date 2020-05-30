import { f1 } from '.';

describe(`Maximum Product Subset`, () => {
  const testCases: TestCase[] = [
    { arr: [0], expected: 0 },
    { arr: [2], expected: 2 },
    { arr: [-3], expected: -3 },
    { arr: [-4, 0], expected: 0 },
    { arr: [0, 1, 5], expected: 5 },
    { arr: [8, 3, 5, 7], expected: 840 },
    { arr: [-3, -4, -5, -2, 0], expected: 120 },
    { arr: [-1, -1, -2, 4, 3], expected: 24 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ arr, expected }) => {
    expect(f1(arr)).toBe(expected);
  });
});

interface TestCase {
  arr: number[];
  expected: number;
}
