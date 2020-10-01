import { f1, f2, f3 } from '.';

describe(`Egg Dropping Puzzle`, () => {
  const testCases = [
    { noOfEggs: 2, noOfFloors: 2, expected: 2 },
    { noOfEggs: 2, noOfFloors: 10, expected: 4 },
  ];
  test.each(testCases)(`Solution 1`, ({ noOfEggs, noOfFloors, expected }) => {
    expect(f1(noOfEggs, noOfFloors)).toBe(expected);
  });
  test.each(testCases)(`Solution 2`, ({ noOfEggs, noOfFloors, expected }) => {
    expect(f2(noOfEggs, noOfFloors)).toBe(expected);
  });
  test.each(testCases)(`Solution 3`, ({ noOfEggs, noOfFloors, expected }) => {
    expect(f3(noOfEggs, noOfFloors)).toBe(expected);
  });
});
