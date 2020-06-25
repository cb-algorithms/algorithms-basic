import Stack from '../Stack';

class UnorderedError extends Error {
  constructor() {
    super('Unordered');
  }
}

export default class OrderedStack<TItem> extends Stack<TItem> {
  constructor(
    private compare: (cur: TItem, pre: TItem) => number,
    defaultValues?: TItem[],
  ) {
    super(defaultValues);
    if (
      defaultValues &&
      defaultValues.some(
        (item, index) =>
          index > 0 && compare(item, defaultValues[index - 1]) < 0,
      )
    )
      throw new UnorderedError();
  }

  push(item: TItem) {
    if (this.length && this.compare(item, this.peek()) < 0)
      throw new UnorderedError();
    super.push(item);
  }
}
