// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (maze: boolean[][]) => {
  const f = (r: number, c: number, m: Cell[]): boolean => {
    if (r < 0 || c < 0 || !maze[r][c]) return false;
    if ((r === 0 && c === 0) || f(r - 1, c, m) || f(r, c - 1, m)) {
      m.push([r, c]);
      return true;
    }
    return false;
  };
  const moves: Cell[] = [];
  return f(maze.length - 1, maze[0].length - 1, moves) && moves;
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f2 = (maze: boolean[][]) => {
  const failedCells: Cell[] = [];
  const f = (r: number, c: number, m: Cell[]): boolean => {
    if (
      r < 0 ||
      c < 0 ||
      !maze[r][c] ||
      failedCells.some(([row, col]) => row === r && col === c)
    )
      return false;
    const cell: Cell = [r, c];
    if ((r === 0 && c === 0) || f(r - 1, c, m) || f(r, c - 1, m)) {
      m.push(cell);
      return true;
    }
    failedCells.push(cell);
    return false;
  };
  const moves: Cell[] = [];
  return f(maze.length - 1, maze[0].length - 1, moves) && moves;
};
// -----------------------------------------------------------------------------

// ------------------------------------
// DEBUG
// ------------------------------------
console.log(
  f2([
    [true, true, false],
    [true, true, true],
    [true, true, true],
  ]),
);

console.log(
  f2([
    [true, true, false],
    [true, true, false],
    [true, true, true],
  ]),
);

console.log(
  f2([
    [true, true, false],
    [true, false, true],
    [true, true, true],
  ]),
);

console.log(
  f2([
    [true, true, false],
    [true, true, false],
    [true, false, true],
  ]),
);
// ------------------------------------

export type Cell = [row: number, col: number];
