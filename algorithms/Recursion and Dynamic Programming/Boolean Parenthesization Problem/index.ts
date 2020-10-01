const replace = <T>(
  arr: T[],
  startIndex: number,
  count: number,
  ...inserts: T[]
) => {
  const newArr = Array.from(arr);
  newArr.splice(startIndex, count, ...inserts);
  return newArr;
};

const evaluators: Record<Operator, (op1: boolean, op2: boolean) => boolean> = {
  AND: (op1, op2) => op1 && op2,
  OR: (op1, op2) => op1 || op2,
  XOR: (op1, op2) => op1 !== op2,
};

export const f1 = (
  operands: boolean[],
  operators: Operator[],
  expected: boolean,
) => {
  const f = (opds: boolean[], oprs: Operator[]): number => {
    console.log('opds:', opds, 'oprs', oprs);
    if (opds.length === 1) return opds[0] === expected ? 1 : 0;
    let result = 0;
    for (let n = 0; n < oprs.length; ++n) {
      console.log('n:', n);
      const opd1 = opds[n];
      const opd2 = opds[n + 1];
      const opr = oprs[n];
      const newOpd = evaluators[opr](opd1, opd2);
      result += f(replace(opds, n, 2, newOpd), replace(oprs, n, 1));
    }
    return result;
  };
  return f(operands, operators);
};

console.log(
  // f1([true, false, true], ['XOR', 'AND'], true),
  // f1([true, false, false], ['XOR', 'OR'], true),
  f1([true, true, false, true], ['OR', 'AND', 'XOR'], true),
);

export type Operator = 'AND' | 'OR' | 'XOR';
