import { tower1 } from '.';
import DescendingStack from '../../data_structures/DescendingStack';

describe(`Tower of Hanoi`, () => {
  const testCases: TestCase[] = [
    { disks: [1] },
    { disks: [2, 1] },
    { disks: [3, 2, 1] },
    { disks: [4, 3, 2, 1] },
  ];
  test.each<TestCase>(testCases)(`Solution 1`, ({ disks }) => {
    const stack1 = new DescendingStack(disks);
    stack1.name = 'Stack 1';
    const stack2 = new DescendingStack();
    stack2.name = 'Stack 2';
    const stack3 = new DescendingStack();
    stack3.name = 'Stack 3';
    tower1(stack1, stack2, stack3);
    expect(stack2.toArray()).toMatchObject(disks);
  });
});

interface TestCase {
  disks: number[];
}
