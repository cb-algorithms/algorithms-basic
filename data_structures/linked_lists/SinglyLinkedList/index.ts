export class SinglyLinkedList<TValue> {
  private head: SinglyLinkedListNode<TValue> | undefined;
  private tail: SinglyLinkedListNode<TValue> | undefined;

  constructor(...list: TValue[]) {
    list.forEach(value => this.append(value));
  }

  append(value: TValue) {
    if (!this.head) {
      this.addFirstValue(value);
    } else {
      const newHead: SinglyLinkedListNode<TValue> = {
        value,
        next: this.head,
      };
      this.head = newHead;
    }
  }

  iterate(handler: (value: TValue) => void) {
    let node = this.head;
    while (node) {
      handler(node.value);
      node = node.next;
    }
  }

  log() {
    this.iterate(console.log);
  }

  prepend(value: TValue) {
    if (!this.tail) {
      this.addFirstValue(value);
    } else {
      this.tail.next = { value };
      this.tail = this.tail.next;
    }
  }

  private addFirstValue(value: TValue) {
    this.head = this.tail = { value };
  }
}

export interface SinglyLinkedListNode<TValue> {
  value: TValue;
  next?: SinglyLinkedListNode<TValue>;
}
