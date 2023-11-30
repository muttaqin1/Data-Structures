export type NodeOrNull<T> = INode<T> | null;

export interface INode<T> {
  data: T;
  next?: NodeOrNull<T>;
  prev?: NodeOrNull<T>;
}

export class Node<T> implements INode<T> {
  constructor(
    public data: T,
    public next: NodeOrNull<T> = null,
    public prev: NodeOrNull<T> = null
  ) {}
}
