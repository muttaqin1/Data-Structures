export type NodeOrNull<T> = INode<T> | null;
export interface INode<T> {
  data: T;
  Left?: NodeOrNull<T>;
  Right?: NodeOrNull<T>;
}

export class Node<T> implements INode<T> {
  constructor(
    public data: T,
    public Left: NodeOrNull<T> = null,
    public Right: NodeOrNull<T> = null
  ) {}
}
