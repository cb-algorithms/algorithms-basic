import DescendingStack from '../../data_structures/stacks/DescendingStack';

const moveDisk = (from: DescendingStack, to: DescendingStack) => {
  const item = from.pop()!;
  to.push(item);
};

const tower1Internal = (
  n: number,
  src: DescendingStack,
  des: DescendingStack,
  sub: DescendingStack,
) => {
  if (n === 1) {
    moveDisk(src, des);
    return;
  }
  tower1Internal(n - 1, src, sub, des);
  tower1Internal(1, src, des, sub);
  tower1Internal(n - 1, sub, des, src);
};

export const tower1 = (
  stack1: DescendingStack,
  stack2: DescendingStack,
  stack3: DescendingStack,
) => {
  tower1Internal(stack1.length, stack1, stack2, stack3);
};
