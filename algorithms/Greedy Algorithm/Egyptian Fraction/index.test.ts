import { Fraction, UnitFraction, f1 } from '.';

describe(`Egyptian Fraction`, () => {
  const testCases: TestCase[] = [
    {
      fraction: { num: 2, den: 3 },
      expected: [
        { num: 1, den: 2 },
        { num: 1, den: 6 },
      ],
    },
    {
      fraction: { num: 6, den: 14 },
      expected: [
        { num: 1, den: 3 },
        { num: 1, den: 11 },
        { num: 1, den: 231 },
      ],
    },
    {
      fraction: { num: 12, den: 13 },
      expected: [
        { num: 1, den: 2 },
        { num: 1, den: 3 },
        { num: 1, den: 12 },
        { num: 1, den: 156 },
      ],
    },
  ];
  [f1].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ fraction, expected }) => {
      expect(f(fraction)).toMatchObject(expected);
    }),
  );
});

interface TestCase {
  fraction: Fraction;
  expected: UnitFraction[];
}
