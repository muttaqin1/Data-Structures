export type NodeOrNull<T> = INode<T> | null;

export interface INode<T> {
  data: T;
  next?: NodeOrNull<T>;
}

export class Node<T> implements INode<T> {
  constructor(public data: T, public next: NodeOrNull<T> = null) {}
}
