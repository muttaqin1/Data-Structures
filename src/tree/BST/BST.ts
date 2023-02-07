import { NodeOrNull, Node, INode } from '../../Node/TwoPonterNode';
import Stack from '../../Stack';

export default class BST<T> {
  constructor(private Root: NodeOrNull<T> = null) {}
  public InsertNode(data: T): void {
    if (!this.Root) {
      this.Root = new Node(data);
      return;
    }
    let temp = this.Root;
    while (temp !== null) {
      if (temp.data > data && !temp.Left) {
        temp.Left = new Node(data);
        break;
      } else if (temp.Left && temp.data > data) {
        temp = temp.Left;
      } else if (temp.data < data && !temp.Right) {
        temp.Right = new Node(data);
        break;
      } else {
        if (temp.Right) temp = temp.Right;
      }
    }
  }
  /* depth first search */
  //Preorder tree traversal
  public PreorderTreeTraversal(): void {
    if (!this.Root) return;
    const stack = new Stack<INode<T>>();
    stack.Push(this.Root);
    while (!stack.IsEmpty()) {
      let node = stack.GetTop();
      console.log(`Node Data: ${node!.data}`);
      stack.Pop();
      if (node?.Left) stack.Push(node.Left);
      if (node?.Right) stack.Push(node.Right);
    }
  }
  public InorderTreeTraversal(): void {}
}

const tree = new BST<number>();
tree.InsertNode(5);
tree.InsertNode(3);
tree.InsertNode(4);
tree.InsertNode(6);
tree.InsertNode(2);
tree.InsertNode(7);
tree.InsertNode(1);

tree.PreorderTreeTraversal();
