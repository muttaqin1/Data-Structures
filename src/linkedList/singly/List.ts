import { NodeOrNull, Node } from '../../Node/Node';

export default class LinkedList<T> {
  constructor(
    private Head: NodeOrNull<T> = null,
    private Tail: NodeOrNull<T> = null
  ) {}

  public DisplayNode(): void {
    let pointer = this.Head;

    let count = 0;
    while (pointer !== null) {
      const data = `Index: ${count} Data: ${pointer.data}`;
      console.log(data);
      ++count;
      pointer = pointer.next as NodeOrNull<T>;
    }
  }

  public AppendNode(data: T): void {
    const newNode = new Node(data);
    if (!this.Head && !this.Tail) {
      this.Head = newNode;
      this.Tail = newNode;
      console.log('Node Appended');
      return;
    }
    if (this.Head && this.Tail) {
      this.Tail.next = newNode;
      this.Tail = newNode;
      console.log('Node Appended');
    }
  }
  public PrependNode(data: T): void {
    const newNode = new Node(data);
    if (!this.Head && !this.Tail) {
      this.Head = newNode;
      this.Tail = newNode;
      console.log('Node Prepended');
      return;
    }
    newNode.next = this.Head;
    this.Head = newNode;
    console.log('Node Prepended');
  }
  public InsertNode(index: number, data: T): void {
    const newNode = new Node(data);
    let pointer = this.Head;
    let count = 1;
    if (index == 0) {
      newNode.next = this.Head;
      this.Head = newNode;
      console.log('Node Inserted');
    } else {
      while (pointer && pointer.next !== null) {
        if (index == count) break;
        ++count;
        pointer = pointer.next as NodeOrNull<T>;
      }
      if (pointer && pointer.next) {
        newNode.next = pointer.next;
        pointer.next = newNode;
        console.log('Node Inserted');
      }
    }
  }
  DeleteNode(index: number): void {
    if (index == 0 && this.Head) {
      this.Head = this.Head.next as NodeOrNull<T>;
      console.log('Node Unlinked');
      return;
    }
    let pointer = this.Head;
    let count = 1;
    while (pointer && pointer.next) {
      if (count == index) break;
      ++count;
      pointer = pointer.next as NodeOrNull<T>;
    }
    if (pointer?.next && pointer && index !== count) {
      pointer.next = pointer.next?.next;
      console.log('Node unlinked');
    }
  }
}
