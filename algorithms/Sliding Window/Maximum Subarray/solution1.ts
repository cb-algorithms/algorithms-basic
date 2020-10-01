const maxSubArray = (numbers: number[]) => {
  if (!numbers.length) return 0;

  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;

  for (let to = 0; to < numbers.length; ++to) {
    sum += numbers[to];
    if (sum > max) max = sum;
    if (sum <= 0) {
      sum = 0;
    }
  }

  return max;
};

export default maxSubArray;
