export default class Stack<TItem> {
  private list: TItem[];
  name: string = '';

  constructor(defaultItems?: TItem[]) {
    this.list = defaultItems ? Array.from(defaultItems) : [];
  }

  get length() {
    return this.list.length;
  }

  peek() {
    return this.list[this.list.length - 1];
  }

  pop() {
    return this.list.pop();
  }

  push(item: TItem) {
    this.list.push(item);
  }

  toArray() {
    return Array.from(this.list);
  }
}
