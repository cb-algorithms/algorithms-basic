export const f1 = (array: number[], total: number) => {
  for (let i = 0; i < array.length - 1; ++i) {
    for (let j = 1; j < array.length; ++j) {
      if (array[i] + array[j] === total) return [array[i], array[j]] as const;
    }
  }
  return null;
};

export const f2 = (array: number[], total: number) => {
  const map: Record<number, number> = {};
  for (let i = 0; i < array.length; ++i) {
    const complement = total - array[i];
    if (typeof map[complement] === 'number') {
      return [array[i], complement] as const;
    } else {
      map[array[i]] = i;
    }
  }
  return null;
};
