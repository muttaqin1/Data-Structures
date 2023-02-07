import { NodeOrNull, Node } from '../../Node/TwoPonterNode';

class BST<T> {
  constructor(private Root: NodeOrNull<T> = null) {}
  public InsertNode(data: T): void {
    if (!this.Root) {
      this.Root = new Node(data);
      return;
    }
    let temp = this.Root;
    while (temp !== null) {
      if (this.Root.data > data && !this.Root) {
      }
    }
  }
}
