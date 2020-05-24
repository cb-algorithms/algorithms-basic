const trap = (heights: number[]) => {
  const leftMaxHeights: number[] = [];
  let maxLeftSoFar = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < heights.length; ++i) {
    maxLeftSoFar = Math.max(maxLeftSoFar, heights[i]);
    leftMaxHeights[i] = maxLeftSoFar;
  }

  const rightMaxHeights: number[] = [];
  let maxRightSoFar = Number.NEGATIVE_INFINITY;
  for (let i = heights.length - 1; i >= 0; --i) {
    maxRightSoFar = Math.max(maxRightSoFar, heights[i]);
    rightMaxHeights[i] = maxRightSoFar;
  }

  let sum = 0;
  for (let i = 0; i < heights.length; ++i) {
    sum += Math.min(leftMaxHeights[i], rightMaxHeights[i]) - heights[i];
  }

  return sum;
};

export default trap;
