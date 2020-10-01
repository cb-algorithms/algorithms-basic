const trap = (heights: number[]) => {
  let maxLeftSoFar = 0;
  let maxRightSoFar = 0;
  let idxLeft = 0;
  let idxRight = heights.length - 1;
  let sum = 0;

  while (idxLeft <= idxRight) {
    if (heights[idxLeft] < heights[idxRight]) {
      if (heights[idxLeft] > maxLeftSoFar) {
        maxLeftSoFar = heights[idxLeft];
      } else {
        sum += maxLeftSoFar - heights[idxLeft];
      }
      ++idxLeft;
    } else {
      if (heights[idxRight] > maxRightSoFar) {
        maxRightSoFar = heights[idxRight];
      } else {
        sum += maxRightSoFar - heights[idxRight];
      }
      --idxRight;
    }
  }

  return sum;
};

export default trap;
