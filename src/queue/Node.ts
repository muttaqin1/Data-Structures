export type NodeOrNull<T> = INode<T> | null;

export interface INode<T> {
  index: number;
  data: T;
  next: NodeOrNull<T>;
}

export class Node<T> implements INode<T> {
  constructor(
    public index: number,
    public data: T,
    public next: NodeOrNull<T> = null
  ) {}
}
