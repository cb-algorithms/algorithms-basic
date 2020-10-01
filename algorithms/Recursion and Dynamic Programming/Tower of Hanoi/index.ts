import DescendingStack from '../../../data_structures/stacks/DescendingStack';

const moveDisk = (from: DescendingStack, to: DescendingStack) => {
  const item = from.pop()!;
  to.push(item);
};

const _f1 = (
  n: number,
  src: DescendingStack,
  des: DescendingStack,
  sub: DescendingStack,
) => {
  if (n === 1) {
    moveDisk(src, des);
    return;
  }
  _f1(n - 1, src, sub, des);
  _f1(1, src, des, sub);
  _f1(n - 1, sub, des, src);
};

export const f1 = (
  src: DescendingStack,
  des: DescendingStack,
  buf: DescendingStack,
) => {
  _f1(src.length, src, des, buf);
};
