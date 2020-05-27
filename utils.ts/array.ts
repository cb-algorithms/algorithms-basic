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

export const range = (length: number, startAt = 0) =>
  Array.from({ length }, (_, index) => startAt + index);

export const rangeRevert = (length: number, startAt = length - 1) =>
  Array.from({ length }, (_, index) => startAt - index);

export const sum = (...numbers: number[]) => sumArray(numbers);

export const sumArray = (numbers: number[]) =>
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
