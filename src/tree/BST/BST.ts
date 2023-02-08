import { NodeOrNull, Node } from '../../Node/TwoPonterNode';

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
  /**
   * preorderTreeTraverse
   * @returns void
   */
  public preorderTreeTraverse(root: NodeOrNull<T> = this.Root): void {
    if (root === null) return;
    console.log(`Data: ${root.data}`);
    this.preorderTreeTraverse(root.Left);
    this.preorderTreeTraverse(root.Right);
  }
  /**
   * inorderTreeTraversal
   * @returns void
   */
  public inorderTreeTraverse(root: NodeOrNull<T> = this.Root): void {
    if (root === null) return;
    this.inorderTreeTraverse(root.Left);
    console.log(`Data: ${root.data}`);
    this.inorderTreeTraverse(root.Right);
  }
  /**
   * postorderTreeTraverse
   * @returns void
   */
  public postorderTreeTraverse(root: NodeOrNull<T> = this.Root): void {
    if (root == null) return;
    this.postorderTreeTraverse(root.Left);
    this.postorderTreeTraverse(root.Right);
    console.log(`Data: ${root.data}`);
  }
}

const tree = new BST<number>();
tree.InsertNode(30);
tree.InsertNode(45);
tree.InsertNode(18);
tree.InsertNode(10);
tree.InsertNode(25);
tree.InsertNode(65);
tree.postorderTreeTraverse();
