export const generateArray: GenerateArray = <TValue>(
  ...[length, ...restLengths]: number[]
) =>
  restLengths.length
    ? Array.from({ length }, () => generateArray(...restLengths))
    : Array.from<TValue>({ length });

export const generateArrayWithDefault: GenerateArrayWithDefault = <TValue>(
  defaultValue: TValue,
  ...[length, ...restLengths]: number[]
) =>
  typeof length === 'number'
    ? Array.from({ length }, () =>
        generateArrayWithDefault(defaultValue, ...restLengths),
      )
    : defaultValue;

export const max = (...numbers: number[]) => maxOf(numbers);

export const maxOf = (numbers: number[]) => Math.max(...numbers);

export const min = (...numbers: number[]) => minOf(numbers);

export const minOf = (numbers: number[]) => Math.min(...numbers);

export const oneWithMaxLength = <TItem>(...arrays: TItem[][]) =>
  oneWithMaxLengthOf(arrays);

export const oneWithMaxLengthOf = <TItem>(arrays: TItem[][]) =>
  arrays.reduce((max, cur) => (cur.length > max.length ? cur : max), []);

export const product = (...numbers: number[]) => productOf(numbers);

export const productOf = (numbers: number[]) =>
  numbers.reduce((acc, cur) => acc * cur, 1);

export const range = (length: number, startAt = 0) =>
  Array.from({ length }, (_, index) => startAt + index);

export const rangeRevert = (length: number, startAt = length - 1) =>
  Array.from({ length }, (_, index) => startAt - index);

export const sum = (...numbers: number[]) => sumOf(numbers);

export const sumOf = (numbers: number[]) =>
  numbers.reduce((acc, cur) => acc + cur, 0);

export interface GenerateArray {
  <TValue>(length: number): TValue[];
  <TValue>(length1: number, length2: number): TValue[][];
  <TValue>(length1: number, length2: number, length3: number): TValue[][][];
  <TValue>(
    length1: number,
    length2: number,
    length3: number,
    length4: number,
  ): TValue[][][][];
  (...lengths: number[]): any[];
}
export interface GenerateArrayWithDefault {
  <TValue>(defaultValue: TValue, length: number): TValue[];
  <TValue>(defaultValue: TValue, length1: number, length2: number): TValue[][];
  <TValue>(
    defaultValue: TValue,
    length1: number,
    length2: number,
    length3: number,
  ): TValue[][][];
  <TValue>(
    defaultValue: TValue,
    length1: number,
    length2: number,
    length3: number,
    length4: number,
  ): TValue[][][][];
  <TValue>(defaultValue: TValue, ...lengths: number[]): any[];
}
