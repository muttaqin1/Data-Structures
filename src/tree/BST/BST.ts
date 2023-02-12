import { NodeOrNull, Node } from './Node';

export default class BST<T> {
  constructor(private Root: NodeOrNull<T> = null) {}
  /**
   * InsertNode
   * @returns void
   */
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
  private printLevelOrder(root: NodeOrNull<T>, level: number) {
    if (!root) return;
    else if (level === 0) console.log(`Data: ${root.data}`);
    else {
      this.printLevelOrder(root.Left as NodeOrNull<T>, level - 1);
      this.printLevelOrder(root.Right as NodeOrNull<T>, level - 1);
    }
  }
  /**
   * breathFirstSearch
   * @returns void
   */
  public breathFirstSearch(root: NodeOrNull<T> = this.Root) {
    const height = this.height();
    for (let level = 0; level <= height; level++)
      this.printLevelOrder(root, level);
  }
  private getMinValue(node: NodeOrNull<T>): NodeOrNull<T> {
    let current = node;
    while (current?.Left !== null) current = current!.Left as NodeOrNull<T>;
    return current;
  }
  /**
   * DeleteNode
   */
  public DeleteNode(value: number, root: NodeOrNull<T> = this.Root) {
    if (root === null) return;
    else if (value < root.data) this.DeleteNode(value, root.Left);
    else if (value > root.data) this.DeleteNode(value, root.Right);
    else {
      if (root.Left == null) return root.Right;
      else if (root.Right == null) return root.Left;
      else {
        let temp = this.getMinValue(root.Right);
        root.data = temp!.data;
        let temp1 = temp!.data as number;
        root.Right = this.DeleteNode(temp1, root.Right);
      }
    }
    return root;
  }
}

const tree = new BST<number>();
tree.InsertNode(30);
tree.InsertNode(45);
tree.InsertNode(18);
tree.InsertNode(10);
tree.InsertNode(25);
tree.InsertNode(65);
tree.DeleteNode(65);
tree.breathFirstSearch();
