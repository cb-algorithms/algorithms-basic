export default class Stack<TValue> {
  private _top: StackNode<TValue> | undefined;
  private _length = 0;
  name: string = '';

  constructor(...defaultValues: TValue[]) {
    for (const value of defaultValues) {
      this.push(value);
    }
  }

  get length() {
    return this._length;
  }

  isEmpty() {
    return this._length === 0;
  }

  peek() {
    return this._top?.value;
  }

  pop() {
    if (!this._top) return undefined;
    const top = this._top;
    this._top = top.previous;
    --this._length;
    return top.value;
  }

  push(value: TValue) {
    this._top = { value, previous: this._top };
    ++this._length;
  }

  toArray() {
    const array: TValue[] = [];
    let node = this._top;
    while (node) {
      array.unshift(node.value);
      node = node.previous;
    }
    return array;
  }
}

// ------------------------------------
// DEBUG
// ------------------------------------
// const stack = new Stack([1, 2, 3, 4]);
// stack.push(5);
// console.log(stack.length);
// while (stack.length) {
//   console.log(stack.pop());
// }
// ------------------------------------

export interface StackNode<TValue> {
  value: TValue;
  previous?: StackNode<TValue>;
}
