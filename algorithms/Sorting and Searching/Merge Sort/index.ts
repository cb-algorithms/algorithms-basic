export const f1 = (arr: number[]) => {
  const merge = (begin: number, middle: number, end: number) => {
    const temp: number[] = [];
    for (let i = begin; i < end; ++i) {
      temp[i] = arr[i];
    }
    let l = begin;
    let r = middle;
    let p = begin;
    while (l < middle && r < end) {
      if (temp[l] <= temp[r]) {
        arr[p] = temp[l];
        ++l;
      } else {
        arr[p] = temp[r];
        ++r;
      }
      ++p;
    }
    for (; l < middle; ++l, ++p) {
      arr[p] = temp[l];
    }
  };

  const f = (begin: number, end: number) => {
    if (end - begin <= 1) return;
    const middle = Math.trunc((begin + end) / 2);
    f(begin, middle);
    f(middle, end);
    merge(begin, middle, end);
  };

  f(0, arr.length);
};

const arr = [6, 3, 5, 3, 8, 2, 9, 1];
f1(arr);
console.log(arr);
