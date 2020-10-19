export const f1 = (arr: number[]) => {
  const merge = (begin: number, middle: number, end: number) => {
    const temp: number[] = [];
    for (let i = begin; i < end; ++i) {
      temp.push(arr[i]);
    }
    let l = begin;
    let r = middle;
    let p = begin;
    while (l < middle && r < end) {
      if (temp[l - begin] <= temp[r - begin]) {
        arr[p] = temp[l - begin];
        ++l;
      } else {
        arr[p] = temp[r - begin];
        ++r;
      }
      ++p;
    }
    for (; l < middle; ++l, ++p) {
      arr[p] = temp[l - begin];
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
