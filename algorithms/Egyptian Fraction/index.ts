export const f1 = ({ num, den }: Fraction) => {
  const unitFractions: UnitFraction[] = [];
  let n: number;

  do {
    n = Math.ceil(den / num);
    unitFractions.push({ num: 1, den: n });
    num = num * n - den;
    den = den * n;
  } while (num !== 0);

  return unitFractions;
};

export interface Fraction {
  num: number;
  den: number;
}

export interface UnitFraction extends Fraction {
  num: 1;
}
