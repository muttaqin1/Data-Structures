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
   * preorderTreeTraversal
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
   * postorderTreeTraversal
   * @returns void
   */
  public postorderTreeTraverse(root: NodeOrNull<T> = this.Root): void {
    if (root == null) return;
    this.postorderTreeTraverse(root.Left);
    this.postorderTreeTraverse(root.Right);
    console.log(`Data: ${root.data}`);
  }
  /**
   * height
   * @returns number
   */
  public height(root: NodeOrNull<T> = this.Root): number {
    if (!root) return -1;
    let LeftHeight = this.height(root.Left);
    let RightHeight = this.height(root.Right);
    if (LeftHeight > RightHeight) return LeftHeight + 1;
    else return RightHeight + 1;
  }
  /**
   * search
   * @returns Node or Null
   */
  public search(data: T): NodeOrNull<T> {
    let temp = this.Root;
    while (temp !== null) {
      if (temp.data === data) {
        return temp;
      } else if (temp && temp.data > data) temp = temp.Left as NodeOrNull<T>;
      else temp = temp.Right as NodeOrNull<T>;
    }
    return null;
  }
}

const tree = new BST<number>();
tree.InsertNode(30);
tree.InsertNode(45);
tree.InsertNode(18);
tree.InsertNode(10);
tree.InsertNode(25);
tree.InsertNode(65);
