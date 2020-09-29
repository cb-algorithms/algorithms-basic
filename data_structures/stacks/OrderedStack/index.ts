import Stack from '../Stack';

class UnorderedError extends Error {
  constructor() {
    super('Unordered');
  }
}

export default class OrderedStack<TValue> extends Stack<TValue> {
  constructor(
    private compare: (cur: TValue, pre: TValue) => number,
    ...defaultValues: TValue[]
  ) {
    super(...defaultValues);
    if (
      defaultValues &&
      defaultValues.some(
        (item, index) =>
          index > 0 && compare(item, defaultValues[index - 1]) < 0,
      )
    )
      throw new UnorderedError();
  }

  push(item: TValue) {
    if (this.length && this.compare(item, this.peek()!) < 0)
      throw new UnorderedError();
    super.push(item);
  }
}
