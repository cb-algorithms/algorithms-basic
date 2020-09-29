import { f1, f2 } from '.';

describe(`Magic Index`, () => {
  const testCases: TestCase[] = [
    { arr: [], expected: undefined },
    { arr: [2], expected: undefined },
    { arr: [0], expected: 0 },
    { arr: [-4, -2, 0, 2, 4, 6, 8], expected: 4 },
    { arr: [-9, 1, 4, 5, 8, 13, 21, 45, 66], expected: 1 },
  ];
  [f1, f2].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ arr, expected }) =>
      expect(f(arr)).toBe(expected),
    ),
  );
});

interface TestCase {
  arr: number[];
  expected: number | undefined;
}
