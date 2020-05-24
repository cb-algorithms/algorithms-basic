const trap = (heights: number[]) => {
  let sum = 0;

  for (let i = 1; i < heights.length - 1; ++i) {
    let maxLeft = heights[i];
    for (let j = i; j >= 0; --j) {
      if (heights[j] > maxLeft) maxLeft = heights[j];
    }

    let maxRight = heights[i];
    for (let j = i; j < heights.length; ++j) {
      if (heights[j] > maxRight) maxRight = heights[j];
    }

    sum += Math.min(maxLeft, maxRight) - heights[i];
  }

  return sum;
};

export default trap;
