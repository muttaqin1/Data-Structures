import { Node, NodeOrNull } from './Node';

export default class LinkedList<T> {
  private Head: NodeOrNull<T> = null;
  private Tail: NodeOrNull<T> = null;

  public AppendNode(data: T): void {
    if (!this.Head) {
      const node = new Node(data);
      this.Head = node;
    }
  }
}
