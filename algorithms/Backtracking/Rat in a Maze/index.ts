import { generateArrayWithDefault } from '../../../utils/array';

const isValidMove = (row: number, col: number, maze: (0 | 1)[][]) =>
  row < maze.length && col < maze[0].length && !!maze[row][col];

// -----------------------------------------------------------------------------
// Solution 1: Using a mask array
// -----------------------------------------------------------------------------
export const f1 = (maze: (0 | 1)[][]) => {
  const moves = generateArrayWithDefault<0 | 1>(0, maze.length, maze[0].length);

  const f = (r: number, c: number): boolean => {
    moves[r][c] = 1;
    if (r === maze.length - 1 && c === maze[0].length - 1) return true;
    if (isValidMove(r, c + 1, maze) && f(r, c + 1)) return true;
    if (isValidMove(r + 1, c, maze) && f(r + 1, c)) return true;
    moves[r][c] = 0;
    return false;
  };

  return f(0, 0) && moves;
};
// -----------------------------------------------------------------------------

// ------------------------------------
// DEBUG
// ------------------------------------
console.log(
  f1([
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 1],
  ]),
);
// ------------------------------------
