import { f1, f2, f3 } from '.';

describe(`Dice Throw`, () => {
  const testCases: TestCase[] = [
    { diceCount: 2, faceCount: 4, sum: 1, expected: 0 },
    { diceCount: 2, faceCount: 2, sum: 3, expected: 2 },
    { diceCount: 3, faceCount: 6, sum: 8, expected: 21 },
    { diceCount: 2, faceCount: 4, sum: 5, expected: 4 },
    { diceCount: 3, faceCount: 4, sum: 5, expected: 6 },
  ];
  [f1, f2, f3].forEach((f, i) =>
    test.each(testCases)(
      `Solution ${i + 1}`,
      ({ diceCount, faceCount, sum, expected }) =>
        expect(f(diceCount, faceCount, sum)).toBe(expected),
    ),
  );
});

interface TestCase {
  diceCount: number;
  faceCount: number;
  sum: number;
  expected: number;
}
