import { generateArrayWithDefault } from '../../../utils/array';

export const f1 = (count: number) => {
  const queens = generateArrayWithDefault<0 | 1>(0, count, count);
  const range = Array.from({ length: count }, (_, i) => i);
  const isValid = (r: number, c: number) => {
    if (range.some(row => queens[row][c])) return false;
    const leftOffset = Math.min(r, c);
    for (
      let ri = r - leftOffset, ci = c - leftOffset;
      ri < count && ci < count;
      ++ri, ++ci
    ) {
      if (queens[ri][ci]) return false;
    }
    const rightOffset = Math.min(r, count - 1 - c);
    for (
      let ri = r - rightOffset, ci = c + rightOffset;
      ri < count && ci >= 0;
      ++ri, --ci
    ) {
      if (queens[ri][ci]) return false;
    }
    return true;
  };

  const f = (r: number, c: number): boolean => {
    if (r >= 0) queens[r][c] = 1;
    if (r === count - 1) return true;
    for (let nc = 0; nc < count; ++nc) {
      if (isValid(r + 1, nc) && f(r + 1, nc)) return true;
    }
    if (r >= 0) queens[r][c] = 0;
    return false;
  };

  return f(-1, -1) && queens;
};

console.log(f1(7));
