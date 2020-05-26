import { uglyNumber1, uglyNumber2 } from '.';

describe(`Ugly Numbers`, () => {
  const testCases: TestCase[] = [
    { nth: 7, expected: 8 },
    { nth: 10, expected: 12 },
    { nth: 15, expected: 24 },
    { nth: 150, expected: 5832 },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ nth, expected }) => {
    expect(uglyNumber1(nth)).toBe(expected);
  });
  test.each<TestCase>(testCases)(`Solution 2`, ({ nth, expected }) => {
    expect(uglyNumber2(nth)).toBe(expected);
  });
});

interface TestCase {
  nth: number;
  expected: number;
}
