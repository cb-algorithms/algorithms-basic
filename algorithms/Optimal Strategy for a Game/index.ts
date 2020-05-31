export const f1 = (coins: number[]) => {
  const f = (left: number, right: number): GameInfo1 => {
    const valLeft = coins[left];
    const valRight = coins[right];
    if (left === right) return { dif: valLeft, seq: [valLeft] };

    const subLeft = f(left + 1, right);
    const difLeft = valLeft - subLeft.dif;
    const subRight = f(left, right - 1);
    const difRight = valRight - subRight.dif;

    return difLeft > difRight
      ? { dif: difLeft, seq: [valLeft, ...subLeft.seq] }
      : { dif: difRight, seq: [valRight, ...subRight.seq] };
  };
  return f(0, coins.length - 1).seq;
};

export const f4 = (coins: number[]) => {
  const f = (left: number, right: number): GameInfo2 => {
    const valLeft = coins[left];
    const valRight = coins[right];
    if (left === right) return { sum: valLeft, seq: [valLeft] };
    if (left === right - 1) {
      const max = Math.max(valLeft, valRight);
      return { sum: max, seq: [max] };
    }

    const subLeft = f(left, right - 2);
    const subMiddle = f(left + 1, right - 1);
    const subRight = f(left + 2, right);
    const minSubLeft = subLeft.sum < subMiddle.sum ? subLeft : subMiddle;
    const minSubRight = subRight.sum < subMiddle.sum ? subRight : subMiddle;
    const sumLeft = valLeft + minSubRight.sum;
    const sumRight = valRight + minSubLeft.sum;

    return sumLeft > sumRight
      ? { sum: sumLeft, seq: [valLeft, ...minSubRight.seq] }
      : { sum: sumRight, seq: [valRight, ...minSubLeft.seq] };
  };

  return f(0, coins.length - 1);
};

interface GameInfo1 {
  dif: number;
  seq: number[];
}

interface GameInfo2 {
  sum: number;
  seq: number[];
}

console.log(f1([7, 3]));
console.log(f1([5, 3, 7, 10]));
console.log(f1([8, 15, 3, 7]));
console.log(f1([3, 12, 11, 2, 6, 4]));
console.log(f1([9, 13, 14, 12, 2, 6, 4, 5]));
console.log(f1([22, 12, 8, 27, 16, 3, 5, 33, 40, 18]));

console.log(f4([7, 3]));
console.log(f4([5, 3, 7, 10]));
console.log(f4([8, 15, 3, 7]));
console.log(f4([3, 12, 11, 2, 6, 4]));
console.log(f4([9, 13, 14, 12, 2, 6, 4, 5]));
console.log(f4([22, 12, 8, 27, 16, 3, 5, 33, 40, 18]));

// 1, 2, 3, 4, 5, 6;
// f(1, 6) = max(6 + min(f(2, 5), f(1, 4)), 1 + min(f(2, 5), f(3, 6)));
