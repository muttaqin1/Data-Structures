import { Node, NodeOrNull } from './Node/Node';

export default class Queue<T> {
  constructor(
    private Left: NodeOrNull<T> = null,
    private Right: NodeOrNull<T> = null
  ) {}

  displayData(root: NodeOrNull<T> = this.Left) {
    while (root != null) {
      console.log('data ' + root.data);
      root = root.next as NodeOrNull<T>;
    }
  }
  private IsEmpty(): boolean {
    return !this.Left && !this.Right ? true : false;
  }
  /**
   * Enqueue
   */
  public Enqueue(data: T): void {
    const node = new Node(data);
    if (!this.Left && !this.Right) {
      this.Left = node;
      this.Right = node;
      console.log('Enqueued');

      return;
    }
    if (this.Left && this.Right) {
      this.Left.next = node;
      this.Right = node;
      console.log('Enqueued');
    }
  }
  /**
   * Dequeue
   */
  public Dequeue(): T | null {
    if (this.IsEmpty()) {
      console.log('Queue is empty');
      return null;
    }
    let temp = this.Left!.data;
    this.Left = this.Left?.next as NodeOrNull<T>;
    return temp;
  }
}

const queue = new Queue<number>();
queue.Enqueue(4);
queue.Enqueue(3);
queue.Enqueue(5);
queue.displayData();
