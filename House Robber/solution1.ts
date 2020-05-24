const rob = (amounts: number[]) => {
  let max_0 = 0;
  let max_1 = 0;
  let max_2 = 0;

  for (let i = 0; i < amounts.length; ++i) {
    const newMax = amounts[i] + Math.max(max_1, max_2);
    max_2 = max_1;
    max_1 = max_0;
    max_0 = newMax;
  }

  return Math.max(max_0, max_1);
};

export default rob;
