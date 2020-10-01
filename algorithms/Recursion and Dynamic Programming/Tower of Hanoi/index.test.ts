import { f1 } from '.';
import DescendingStack from '../../data_structures/stacks/DescendingStack';

describe(`Tower of Hanoi`, () => {
  const testCases: TestCase[] = [
    { disks: [1] },
    { disks: [2, 1] },
    { disks: [3, 2, 1] },
    { disks: [4, 3, 2, 1] },
  ];
  [f1].forEach((f, i) =>
    test.each<TestCase>(testCases)(`Solution ${i + 1}`, ({ disks }) => {
      const src = new DescendingStack(...disks);
      src.name = 'Stack 1';
      const des = new DescendingStack();
      des.name = 'Stack 2';
      const buf = new DescendingStack();
      buf.name = 'Stack 3';
      f(src, des, buf);
      expect(des.toArray()).toMatchObject(disks);
    }),
  );
});

interface TestCase {
  disks: number[];
}
