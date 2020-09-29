export class Queue<TValue> {
  private _first: QueueNode<TValue> | undefined;
  private _last: QueueNode<TValue> | undefined;
  private _length = 0;

  constructor(...defaultValues: TValue[]) {
    for (const value of defaultValues) {
      this.queue(value);
    }
  }

  get length() {
    return this._length;
  }

  dequeue() {
    if (!this._first) return undefined;
    const { value } = this._first;
    this._first = this._first.next;
    if (!this._first) this._last = undefined;
    --this._length;
    return value;
  }

  isEmpty() {
    return this._length === 0;
  }

  peek() {
    return this._first?.value;
  }

  queue(value: TValue) {
    const nextNode: QueueNode<TValue> = { value };
    if (!this._last) {
      this._first = this._last = nextNode;
    } else {
      this._last.next = nextNode;
    }
    ++this._length;
  }
}

// ------------------------------------
// DEBUG
// ------------------------------------
const queue = new Queue(1, 2, 3, 4);
queue.queue(5);
console.log(queue.length);
while (queue.length) {
  console.log(queue.dequeue());
}
// ------------------------------------

export interface QueueNode<TValue> {
  value: TValue;
  next?: QueueNode<TValue>;
}
