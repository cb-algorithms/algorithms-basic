import { generateArray } from '../../utils.ts/array';

// -----------------------------------------------------------------------------
// Solution 1: naive recursion
// -----------------------------------------------------------------------------
export const f1 = (matrix: number[][], row: number, col: number) => {
  const f = (rowNo: number, colNo: number): number =>
    colNo === 0
      ? matrix[rowNo][colNo]
      : matrix[rowNo][colNo] +
        Math.max.apply(null, [
          f(rowNo, colNo - 1),
          rowNo > 0 ? f(rowNo - 1, colNo - 1) : 0,
          rowNo < row - 1 ? f(rowNo + 1, colNo - 1) : 0,
        ]);

  return Math.max.apply(
    null,
    Array.from({ length: row }, (_, rowNo) => f(rowNo, col - 1)),
  );
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 2: Dynamic Programming - Tabulation Method (Bottom Up)
// -----------------------------------------------------------------------------
export const f2 = (matrix: number[][], row: number, col: number) => {
  const results = generateArray<number>(row, col);

  for (let colNo = 0; colNo < col; ++colNo) {
    for (let rowNo = 0; rowNo < row; ++rowNo) {
      results[rowNo][colNo] =
        colNo === 0
          ? matrix[rowNo][colNo]
          : matrix[rowNo][colNo] +
            Math.max.apply(null, [
              results[rowNo][colNo - 1],
              rowNo > 0 ? results[rowNo - 1][colNo - 1] : 0,
              rowNo < row - 1 ? results[rowNo + 1][colNo - 1] : 0,
            ]);
    }
  }

  return Math.max.apply(
    null,
    Array.from({ length: row }, (_, rowNo) => results[rowNo][col - 1]),
  );
};
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Solution 3: Dynamic Programming - Memoization Method (Top Down)
// -----------------------------------------------------------------------------
export const f3 = (matrix: number[][], row: number, col: number) => {
  const results = generateArray<number>(row, col);

  const f = (rowNo: number, colNo: number) => {
    let result = results[rowNo][colNo];
    if (typeof result !== 'number')
      result =
        colNo === 0
          ? matrix[rowNo][colNo]
          : matrix[rowNo][colNo] +
            Math.max.apply(null, [
              f(rowNo, colNo - 1),
              rowNo > 0 ? f(rowNo - 1, colNo - 1) : 0,
              rowNo < row - 1 ? f(rowNo + 1, colNo - 1) : 0,
            ]);
    return (results[rowNo][colNo] = result);
  };

  return Math.max.apply(
    null,
    Array.from({ length: row }, (_, rowNo) => f(rowNo, col - 1)),
  );
};
// -----------------------------------------------------------------------------
