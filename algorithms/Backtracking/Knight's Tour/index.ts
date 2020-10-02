import { generateArray } from '../../../utils/array';

const knightMoves = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
] as const;

export const f1 = (rows: number, cols: number) => {
  const moves = generateArray<number | undefined>(rows, cols);

  const isValidMove = (row: number, col: number) =>
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols &&
    typeof moves[row][col] === 'undefined';

  const f = (r: number, c: number, n: number): boolean => {
    moves[r][c] = n;
    if (n === rows * cols - 1) return true;
    if (
      knightMoves.some(
        ([v, h]) => isValidMove(r + v, c + h) && f(r + v, c + h, n + 1),
      )
    )
      return true;
    moves[r][c] = undefined;
    return false;
  };

  return f(0, 0, 0) && moves;
};
