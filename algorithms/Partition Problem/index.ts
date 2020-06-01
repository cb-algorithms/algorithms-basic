import { sumOf, generateArray } from '../../utils.ts/array';

export const f1 = (arr: number[]) => {
  const f = (n: number, sum: number): boolean => {
    if (sum === 0) return true;
    if (n === 0) return false;
    const value = arr[n - 1];
    return (sum >= value && f(n - 1, sum - value)) || f(n - 1, sum);
  };

  return f(arr.length, sumOf(arr) / 2);
};

export const f2 = (arr: number[]) => {
  const total = sumOf(arr);
  const results = generateArray<boolean>(arr.length + 1, sumOf(arr) + 1);

  for (let n = 0; n <= arr.length; ++n) {
    for (let sum = 0; sum <= total; ++sum) {
      if (sum === 0) results[n][sum] = true;
      else if (n === 0) results[n][sum] = false;
      else {
        const value = arr[n - 1];
        results[n][sum] =
          (sum >= 2 * value && results[n - 1][sum - 2 * value]) ||
          results[n - 1][sum];
      }
    }
  }

  return results[arr.length][total];
};

export const f3 = (arr: number[]) => {
  const results = Array.from(
    { length: arr.length + 1 },
    () => ({} as Record<number, boolean>),
  );

  const f = (n: number, sum: number): boolean => {
    let result = results[n][sum];
    if (typeof result === 'boolean') return result;
    if (sum === 0) result = true;
    else if (n === 0) result = false;
    else {
      const value = arr[n - 1];
      result = (sum >= value && f(n - 1, sum - value)) || f(n - 1, sum);
    }
    return (results[n][sum] = result);
  };

  return f(arr.length, sumOf(arr) / 2);
};
