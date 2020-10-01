import { generateArray } from '../../../utils.ts/array';

export const f1 = (noOfEggs: number, noOfFloors: number): number => {
  const f = (eggNo: number, floorNo: number) => {
    if (floorNo === 0 || floorNo === 1 || eggNo === 1) return floorNo;
    let minTrials = Number.POSITIVE_INFINITY;
    for (let prevFloorNo = 1; prevFloorNo <= floorNo; ++prevFloorNo) {
      const maxTrials = Math.max(
        f1(eggNo - 1, prevFloorNo - 1),
        f1(eggNo, floorNo - prevFloorNo),
      );
      minTrials = Math.min(minTrials, maxTrials);
    }
    return minTrials + 1;
  };

  return f(noOfEggs, noOfFloors);
};

export const f2 = (noOfEggs: number, noOfFloors: number) => {
  const results = generateArray<number>(noOfEggs + 1, noOfFloors + 1);

  for (let eggNo = 1; eggNo <= noOfEggs; ++eggNo) {
    for (let floorNo = 0; floorNo <= noOfFloors; ++floorNo) {
      if (floorNo === 0 || floorNo === 1 || eggNo === 1)
        results[eggNo][floorNo] = floorNo;
      else {
        let minTrials = Number.POSITIVE_INFINITY;
        for (let prevFloorNo = 1; prevFloorNo <= floorNo; ++prevFloorNo) {
          const maxTrials = Math.max(
            results[eggNo - 1][prevFloorNo - 1],
            results[eggNo][floorNo - prevFloorNo],
          );
          if (maxTrials < minTrials) minTrials = maxTrials;
        }
        results[eggNo][floorNo] = minTrials + 1;
      }
    }
  }

  return results[noOfEggs][noOfFloors];
};

export const f3 = (noOfEggs: number, noOfFloors: number): number => {
  const results = generateArray<number>(noOfEggs + 1, noOfFloors + 1);

  const f = (eggNo: number, floorNo: number) => {
    let result = results[eggNo][floorNo];
    if (typeof result === 'number') return result;

    if (floorNo === 0 || floorNo === 1 || eggNo === 1) result = floorNo;
    else {
      let minTrials = Number.POSITIVE_INFINITY;
      for (let prevFloorNo = 1; prevFloorNo <= floorNo; ++prevFloorNo) {
        const maxTrials = Math.max(
          f1(eggNo - 1, prevFloorNo - 1),
          f1(eggNo, floorNo - prevFloorNo),
        );
        minTrials = Math.min(minTrials, maxTrials);
      }
      result = minTrials + 1;
    }

    return (results[eggNo][floorNo] = result);
  };

  return f(noOfEggs, noOfFloors);
};
