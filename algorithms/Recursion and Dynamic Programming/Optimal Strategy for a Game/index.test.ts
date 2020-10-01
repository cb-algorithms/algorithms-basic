import { f1 } from '.';

describe(`Optimal Strategy for a Game`, () => {
  const testCases = [
    { coins: [7, 3], expected: [7, 3] },
    { coins: [5, 3, 7, 10], expected: [10, 7, 5, 3] },
  ];
  test.each(testCases)(`Solution 1`, ({ coins, expected }) => {
    expect(f1(coins)).toMatchObject(expected);
  });
});
