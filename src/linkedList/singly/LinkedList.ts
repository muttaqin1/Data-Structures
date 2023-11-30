import { NodeOrNull, Node, INode } from './Node';

export default class LinkedList<T> {
  public Head: NodeOrNull<T> = null;
  public Tail: NodeOrNull<T> = null;

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
  public Empty(): boolean {
    return this.Head && this.Tail ? false : true;
  }

  public AppendNode(data: T): void {
    const newNode = new Node(data);
    if (!this.Head && !this.Tail) {
      this.Head = newNode;
      this.Tail = newNode;
      return;
    }
    if (this.Head && this.Tail) {
      this.Tail.next = newNode;
      this.Tail = newNode;
    }
  }
  public PrependNode(data: T): void {
    const newNode = new Node(data);
    if (!this.Head && !this.Tail) {
      this.Head = newNode;
      this.Tail = newNode;
      return;
    }
    newNode.next = this.Head;
    this.Head = newNode;
  }
  public InsertNode(index: number, data: T): void {
    if (index < 0) index = 0;
    const newNode = new Node(data);
    let pointer = this.Head;
    let count = 1;
    if (index == 0) return this.PrependNode(newNode.data);
    while (pointer?.next) {
      if (index == count) break;
      ++count;
      pointer = pointer.next;
    }
    if (pointer && pointer.next) {
      newNode.next = pointer.next;
      pointer.next = newNode;
    }
  }
  public DeleteNode(index: number): void {
    if (index < 0) index = 0;
    if (this.Empty()) return;
    if (index == 0 && this.Head) {
      this.Head = this.Head.next as NodeOrNull<T>;
      return;
    }
    let pointer = this.Head;
    let count = 1;
    while (pointer?.next) {
      if (count == index) break;
      ++count;
      pointer = pointer.next;
    }
    if (pointer && pointer.next) pointer.next = pointer.next?.next;
  }
  public Find(
    data: T | null = null,
    cb: null | ((param: T) => boolean) = null
  ): NodeOrNull<T> {
    if (this.Empty()) return null;
    let temp = this.Head;
    while (temp !== null) {
      if (cb && cb(temp.data)) break;
      if (data === temp.data) break;
      temp = temp.next as NodeOrNull<T>;
    }
    return temp;
  }
  public FromArray(arr: T[]): void {
    arr.forEach((val) => this.AppendNode(val));
  }
  public ToArray(): INode<T>[] {
    const nodes: INode<T>[] = [];
    let pointer = this.Head;
    while (pointer !== null) {
      nodes.push(pointer);
      pointer = pointer.next as NodeOrNull<T>;
    }
    return nodes;
  }
  public Reverse(): void {
    let currNode = this.Head;
    let prevNode = null;
    let nextNode = null;
    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode as NodeOrNull<T>;
    }
    this.Tail = this.Head;
    this.Head = prevNode;
  }
}
