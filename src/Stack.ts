import { Node, NodeOrNull } from './Node/Node';

export default class Stack<T> {
  constructor(private Top: NodeOrNull<T> = null) {}

  public GetTop(): T | null {
    return this.Top ? this.Top.data : this.Top;
  }
  public IsEmpty(): boolean {
    if (this.Top === null) return true;
    else return false;
  }
  public Push(data: T): void {
    const newNode = new Node<T>(data);
    if (this.Top == null) this.Top = newNode;
    else {
      newNode.next = this.Top;
      this.Top = newNode;
    }
  }
  public Pop(): T | null {
    if (this.IsEmpty()) {
      console.log('Stack is Empty');
      return null;
    }
    const temp = this.Top;
    if (this.Top) this.Top = this.Top.next as NodeOrNull<T>;
    return temp && temp.data;
  }
}
