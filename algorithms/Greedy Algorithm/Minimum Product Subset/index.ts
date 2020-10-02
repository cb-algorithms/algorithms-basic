import { productOf, minOf, maxOf } from '../../../utils/array';

export const f1 = (arr: number[]) => {
  const posNumbers: number[] = [];
  const negNumbers: number[] = [];
  let hasZeros = false;

  for (const number of arr) {
    if (number > 0) posNumbers.push(number);
    else if (number < 0) negNumbers.push(number);
    else hasZeros = true;
  }

  if (negNumbers.length) {
    const product = productOf(negNumbers) * productOf(posNumbers);
    return negNumbers.length % 2 ? product : product / maxOf(negNumbers);
  }

  return hasZeros ? 0 : minOf(posNumbers);
};
