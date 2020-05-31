import { sumOf } from '../../utils.ts/array';

export const f1 = (arr: number[]) => {
  const f = (n: number, target: number): number => {
    if (n === 0) return 0;
    const value = arr[n - 1];
    const sum1 = f(n - 1, target);
    const sum2 = f(n - 1, target - value) + value;
    return Math.abs(target - sum1) < Math.abs(target - sum2) ? sum1 : sum2;
  };
  const total = sumOf(arr);
  const sum = f(arr.length, total / 2);
  return Math.abs(total - sum * 2);
};

export const f2 = (arr: number[]) => {
  const total = sumOf(arr);
  const results = Array.from(
    { length: arr.length + 1 },
    () => ({} as Record<number, number>),
  );

  const f = (n: number, target: number) => {
    let result = results[n][target];
    if (typeof result === 'number') return result;
    if (n === 0) result = 0;
    else {
      const value = arr[n - 1];
      const sum1 = f(n - 1, target);
      const sum2 = f(n - 1, target - value) + value;
      result = Math.abs(target - sum1) < Math.abs(target - sum2) ? sum1 : sum2;
    }
    return (results[n][target] = result);
  };

  const sum = f(arr.length, total / 2);
  return Math.abs(total - sum * 2);
};

export const fb1 = (arr: number[]) => {
  const f = (n: number, total: number): SubsetResult => {
    if (n === 0) return { subset1: [], subset2: [] };
    const value = arr[n - 1];
    const result1 = f(n - 1, total);
    const result2 = f(n - 1, total - value);
    return Math.abs(total - sumOf(result1.subset1)) <
      Math.abs(total - (sumOf(result2.subset1) + value))
      ? { subset1: [...result1.subset1], subset2: [...result1.subset2, value] }
      : { subset1: [...result2.subset1, value], subset2: [...result2.subset2] };
  };
  return f(arr.length, sumOf(arr) / 2);
};

interface SubsetResult {
  subset1: number[];
  subset2: number[];
}

console.log(fb1([2, 9]));
console.log(f1([2, 9]));
console.log(f2([2, 9]));
console.log(fb1([7, 6, 3]));
console.log(f1([7, 6, 3]));
console.log(f2([7, 6, 3]));
console.log(fb1([1, 6, 11, 5]));
console.log(f1([1, 6, 11, 5]));
console.log(f2([1, 6, 11, 5]));
console.log(fb1([8, 2, 12, 10, 16]));
console.log(f1([8, 2, 12, 10, 16]));
console.log(f2([8, 2, 12, 10, 16]));
console.log(fb1([3, 12, 8, 2, 7, 15]));
console.log(f1([3, 12, 8, 2, 7, 15]));
console.log(f2([3, 12, 8, 2, 7, 15]));
