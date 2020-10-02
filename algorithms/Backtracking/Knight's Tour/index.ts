import { generateArray } from '../../../utils/array';

const knightMoves: Coordinate[] = [
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
];

export const f1 = (rows: number, cols: number) => {
  const moves = generateArray<number | undefined>(rows, cols);

  const isValidMove = ([row, col]: Coordinate) =>
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols &&
    typeof moves[row][col] === 'undefined';

  const allMovesFilled = () =>
    moves.every(row => row.every(col => typeof col === 'number'));

  const f = (move: Coordinate, nth: number): boolean => {
    if (allMovesFilled()) return true;
    if (!isValidMove(move)) return false;
    const [row, col] = move;
    moves[row][col] = nth;
    if (knightMoves.some(([r, c]) => f([row + r, col + c], nth + 1)))
      return true;
    moves[row][col] = undefined;
    return false;
  };

  return f([0, 0], 0) && moves;
};

export type Coordinate = [row: number, col: number];
