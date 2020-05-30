import { productOf, maxOf } from '../../utils.ts/array';

export const f1 = (arr: number[]) => {
  const posNumbers: number[] = [];
  const negNumbers: number[] = [];
  let hasZeros = false;

  for (const number of arr) {
    if (number > 0) posNumbers.push(number);
    else if (number < 0) negNumbers.push(number);
    else hasZeros = true;
  }

  if (posNumbers.length || negNumbers.length > 1) {
    const product = productOf(negNumbers) * productOf(posNumbers);
    return negNumbers.length && negNumbers.length % 2 === 1
      ? product / maxOf(negNumbers)
      : product;
  }

  return hasZeros ? 0 : maxOf(negNumbers);
};
