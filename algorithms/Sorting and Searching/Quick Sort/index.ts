export const f1 = (arr: number[]) => {
  const partition = (begin: number, end: number) => {
    const pivot = arr[Math.trunc((begin + end) / 2)];
    let l = begin;
    let r = end - 1;
    while (l < r) {
      for (; arr[l] < pivot; ++l);
      for (; arr[r] > pivot; --r);
      if (l < r) {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        ++l;
        --r;
      }
    }
    return l;
  };

  const f = (begin: number, end: number) => {
    if (end - begin <= 1) return;
    const pivotIndex = partition(begin, end);
    f(begin, pivotIndex);
    f(pivotIndex, end);
  };

  f(0, arr.length);
};

const arr = [6, 3, 5, 3, 8, 2, 9, 1];
f1(arr);
console.log(arr);
