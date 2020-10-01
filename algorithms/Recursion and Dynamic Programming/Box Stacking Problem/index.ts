import { oneWithMaxLength, generateArray } from '../../../utils.ts/array';

const compareBoxes = ([b1s1, b1s2]: Box, [b2s1, b2s2]: Box) =>
  (b1s1 > b2s1 && b1s2 > b2s2) || (b1s1 > b2s2 && b1s2 > b2s1)
    ? 1
    : (b1s1 < b2s1 && b1s2 < b2s2) || (b1s1 < b2s2 && b1s2 < b2s1)
    ? -1
    : 0;

const insertBox = (box: Box, boxes: Box[]) => {
  if (boxes.length === 0) return [box];
  if (compareBoxes(boxes[0], box) > 0) return [box, ...boxes];
  if (compareBoxes(box, boxes[boxes.length - 1]) > 0) return [...boxes, box];
  const newBoxes: Box[] = [];
  for (let i = 0; i < boxes.length - 1; ++i) {
    if (compareBoxes(box, boxes[i]) > 0 && compareBoxes(boxes[i + 1], box) > 0)
      newBoxes.push(box);
    else newBoxes.push(boxes[i]);
  }
  return newBoxes;
};

export const f1 = (boxes: Box[]) => {
  const f = (n: number): Box[] => {
    if (n === 0) return [];
    const box = boxes[n - 1];
    const [s1, s2, s3] = box;
    const subBoxes = f(n - 1);
    const boxes1 = insertBox([s1, s2, s3], subBoxes);
    const boxes2 = insertBox([s1, s3, s2], subBoxes);
    const boxes3 = insertBox([s2, s3, s1], subBoxes);
    return oneWithMaxLength(boxes1, boxes2, boxes3);
  };

  return f(boxes.length);
};

export const f2 = (boxes: Box[]) => {
  const results = generateArray<Box[]>(boxes.length + 1);
  results[0] = [];
  for (let n = 1; n <= boxes.length; ++n) {
    const box = boxes[n - 1];
    const [s1, s2, s3] = box;
    const subBoxes = results[n - 1];
    const boxes1 = insertBox([s1, s2, s3], subBoxes);
    const boxes2 = insertBox([s1, s3, s2], subBoxes);
    const boxes3 = insertBox([s2, s3, s1], subBoxes);
    results[n] = oneWithMaxLength(boxes1, boxes2, boxes3);
  }
  console.log(results);
};

console.log(
  f2([
    [4, 6, 7],
    [1, 2, 3],
    [4, 5, 6],
    [10, 12, 32],
  ]),
);

export type Box = [number, number, number];
