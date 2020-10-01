import { generateArray } from '../../../utils.ts/array';

export const f1 = (matrix: number[][]) => {
  const rowNo = matrix.length;
  const colNo = matrix[0].length;

  const f = (row: number, col: number) => {
    if (row === 0 || col === 0) return [];
    const value = matrix[row - 1][col - 1];
    let path = [value];

    if (row > 1 && value - matrix[row - 2][col - 1] === 1) {
      const goUp = f(row - 1, col);
      if (goUp.length + 1 > path.length) path = [...goUp, value];
    }

    if (row < rowNo && value - matrix[row][col - 1] === 1) {
      const goDown = f(row + 1, col);
      if (goDown.length + 1 > path.length) path = [...goDown, value];
    }

    if (col > 1 && value - matrix[row - 1][col - 2] === 1) {
      const goLeft = f(row, col - 1);
      if (goLeft.length + 1 > path.length) path = [...goLeft, value];
    }

    if (col < colNo && value - matrix[row - 1][col] === 1) {
      const goRight = f(row, col + 1);
      if (goRight.length + 1 > path.length) path = [...goRight, value];
    }

    return path;
  };

  let longestPath: number[] = [];
  for (let row = 1; row <= rowNo; ++row) {
    for (let col = 1; col <= colNo; ++col) {
      const path = f(row, col);
      if (path.length > longestPath.length) longestPath = path;
    }
  }
  return longestPath;
};

export const f2 = (matrix: number[][]) => {
  const rowNo = matrix.length;
  const colNo = matrix[0].length;
  const results = generateArray<number[]>(rowNo + 1, colNo + 1);

  const f = (row: number, col: number) => {
    let path = results[row][col];
    if (path) return path;

    if (row === 0 || col === 0) path = [];
    else {
      const value = matrix[row - 1][col - 1];
      path = [value];

      if (row > 1 && value - matrix[row - 2][col - 1] === 1) {
        const goUp = f(row - 1, col);
        if (goUp.length + 1 > path.length) path = [...goUp, value];
      }

      if (row < rowNo && value - matrix[row][col - 1] === 1) {
        const goDown = f(row + 1, col);
        if (goDown.length + 1 > path.length) path = [...goDown, value];
      }

      if (col > 1 && value - matrix[row - 1][col - 2] === 1) {
        const goLeft = f(row, col - 1);
        if (goLeft.length + 1 > path.length) path = [...goLeft, value];
      }

      if (col < colNo && value - matrix[row - 1][col] === 1) {
        const goRight = f(row, col + 1);
        if (goRight.length + 1 > path.length) path = [...goRight, value];
      }
    }

    return (results[row][col] = path);
  };

  let longestPath: number[] = [];
  for (let row = 1; row <= rowNo; ++row) {
    for (let col = 1; col <= colNo; ++col) {
      const path = f(row, col);
      if (path.length > longestPath.length) longestPath = path;
    }
  }
  return longestPath;
};
