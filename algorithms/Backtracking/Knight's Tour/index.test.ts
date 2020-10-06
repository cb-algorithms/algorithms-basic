import { f1 } from '.';

function assertMoves(
  moves: false | (number | undefined)[][],
): asserts moves is number[][] {
  expect(moves).toBeTruthy();
}

const printMoves = (moves: number[][]) =>
  console.log(
    moves
      .map(row => row.map(col => String(col + 1).padStart(2, '0')).join('  '))
      .join('\n\n'),
  );

describe(`Knight's Tour`, () => {
  const testCases: TestCase[] = [
    { rows: 3, cols: 3, expected: false },
    { rows: 4, cols: 4, expected: false },
    { rows: 5, cols: 5, expected: true },
    { rows: 6, cols: 6, expected: true },
    { rows: 7, cols: 7, expected: true },
    { rows: 8, cols: 8, expected: true },
  ];

  [f1].forEach((f, i) =>
    test.each(testCases)(`Solution ${i + 1}`, ({ rows, cols, expected }) => {
      const moves = f(rows, cols);
      if (!expected) return expect(moves).toBe(false);
      assertMoves(moves);
      printMoves(moves);
      expect(moves).toHaveLength(rows);

      const steps: [row: number, col: number][] = [];
      for (let r = 0; r < moves!.length; ++r) {
        const row = moves![r];
        expect(row).toHaveLength(cols);
        for (let c = 0; c < row.length; ++c) {
          const step = row[c];
          steps[step] = [r, c];
        }
      }

      for (let step = 0; step < steps.length - 1; ++step) {
        expect(typeof steps[step]).toBe('object');
        const [currRow, currCol] = steps[step];
        const [nextRow, nextCol] = steps[step + 1];
        const rowDiff = Math.abs(nextRow - currRow);
        const colDiff = Math.abs(nextCol - currCol);
        expect(rowDiff === 1 || rowDiff === 2).toBe(true);
        expect(colDiff === 1 || colDiff === 2).toBe(true);
        expect(Math.abs(rowDiff - colDiff)).toBe(1);
      }
    }),
  );
});

interface TestCase {
  rows: number;
  cols: number;
  expected: boolean;
}
