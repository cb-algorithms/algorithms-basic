const checkValid = (row: number, col: number, occupied: Cell[]) =>
  occupied.every(
    ([r, c]) =>
      row !== r && col !== c && Math.abs(row - r) !== Math.abs(col - c),
  );

export const f1 = (size: number) => {
  const f = (r: number, c: number, o: Cell[], results: Cell[][]): number => {
    const occupied: Cell[] = [...o, [r, c]];
    if (r === 0) {
      results.push(occupied);
      return 1;
    }
    let count = 0;
    for (let i = 0; i < size; ++i) {
      if (checkValid(r - 1, i, occupied))
        count += f(r - 1, i, occupied, results);
    }
    return count;
  };

  const results: Cell[][] = [];
  let count = 0;
  for (let c = 0; c < size; ++c) {
    count += f(size - 1, c, [], results);
  }
  return { count, results };
};

console.log(f1(5).results);

type Cell = [row: number, col: number];
