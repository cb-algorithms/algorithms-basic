import { generateArray } from '../../../utils/array';

export const f1 = (matrix: number[][]) => {
  const f = (row: number, col: number): number[] => {
    const value = matrix[row][col];
    let longestSequence: number[] = [];

    if (row > 0 && Math.abs(matrix[row - 1][col] - value) === 1) {
      const sequenceAbove = f(row - 1, col);
      if (sequenceAbove.length > longestSequence.length)
        longestSequence = sequenceAbove;
    }

    if (col > 0 && Math.abs(matrix[row][col - 1] - value) === 1) {
      const sequenceLeft = f(row, col - 1);
      if (sequenceLeft.length > longestSequence.length)
        longestSequence = sequenceLeft;
    }

    return [...longestSequence, value];
  };

  let longestSequence: number[] = [];

  for (let row = matrix.length - 1; row >= 0; --row) {
    for (let col = matrix[0].length - 1; col >= 0; --col) {
      const sequence = f(row, col);
      if (sequence.length > longestSequence.length) longestSequence = sequence;
    }
  }

  return longestSequence;
};

export const f2 = (matrix: number[][]) => {
  const results = generateArray<number[]>(matrix.length, matrix[0].length);
  let longestSequence: number[] = [];

  for (let row = 0; row < matrix.length; ++row) {
    for (let col = 0; col < matrix[0].length; ++col) {
      const value = matrix[row][col];
      let sequence: number[] = [value];

      if (row > 0 && Math.abs(matrix[row - 1][col] - value) === 1) {
        const sequenceAbove = results[row - 1][col];
        if (sequenceAbove.length + 1 > sequence.length)
          sequence = [...sequenceAbove, value];
      }

      if (col > 0 && Math.abs(matrix[row][col - 1] - value) === 1) {
        const sequenceLeft = results[row][col - 1];
        if (sequenceLeft.length + 1 > sequence.length)
          sequence = [...sequenceLeft, value];
      }

      results[row][col] = sequence;
      if (sequence > longestSequence) longestSequence = sequence;
    }
  }

  return longestSequence;
};

export const f3 = (matrix: number[][]) => {
  const results = generateArray<number[]>(matrix.length, matrix[0].length);

  const f = (row: number, col: number) => {
    let sequence = results[row][col];

    if (!sequence) {
      const value = matrix[row][col];
      let longestSequence: number[] = [];

      if (row > 0 && Math.abs(matrix[row - 1][col] - value) === 1) {
        const sequenceAbove = f(row - 1, col);
        if (sequenceAbove.length > longestSequence.length)
          longestSequence = sequenceAbove;
      }

      if (col > 0 && Math.abs(matrix[row][col - 1] - value) === 1) {
        const sequenceLeft = f(row, col - 1);
        if (sequenceLeft.length > longestSequence.length)
          longestSequence = sequenceLeft;
      }

      sequence = [...longestSequence, value];
    }

    return (results[row][col] = sequence);
  };

  let longestSequence: number[] = [];

  for (let row = matrix.length - 1; row >= 0; --row) {
    for (let col = matrix[0].length - 1; col >= 0; --col) {
      const sequence = f(row, col);
      if (sequence.length > longestSequence.length) longestSequence = sequence;
    }
  }

  return longestSequence;
};
