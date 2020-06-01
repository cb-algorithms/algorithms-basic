import { f1, f4 } from '.';

describe(`Activity Selection`, () => {
  const testCases = [
    {
      activities: [
        { begin: 1, end: 4 },
        { begin: 3, end: 5 },
        { begin: 0, end: 6 },
        { begin: 5, end: 7 },
        { begin: 3, end: 9 },
        { begin: 5, end: 9 },
        { begin: 6, end: 10 },
        { begin: 8, end: 11 },
        { begin: 8, end: 12 },
        { begin: 2, end: 14 },
        { begin: 12, end: 16 },
      ],
      expected: 4,
    },
  ];
  test.each(testCases)(`Solution 1`, ({ activities, expected }) => {
    expect(f1(activities)).toBe(expected);
    console.log(f4(activities));
  });
});
