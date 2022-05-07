/**
 * @public
 */
export type LinkedListNode<T> = {
  value: T;
  next: LinkedListNode<T> | null;
};

/**
 * Linked List
 * @public
 */
class LinkedList<T> {
  private nodes: LinkedListNode<T>[] = [];

  constructor() {
    this.nodes = [];
  }

  /**
   * Returns the size of the list
   */
  get size() {
    return this.nodes.length;
  }

  /**
   * Returns the head of the list
   */
  get head() {
    return this.size ? this.nodes[0] : null;
  }

  /**
   * Returns the tail of the list
   */
  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }

  /**
   * Check if the linked list is empty
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * Adds a node to the list
   * @param index - The index to add the node at
   * @param value - The value to add to the node
   * @returns The node that was added
   * @public
   */
  public insertAt(index: number, value: T) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    const node = { value, next: nextNode };

    if (previousNode) previousNode.next = node;
    this.nodes.splice(index, 0, node);

    return node;
  }

  /**
   * inserts a node to the front of the list
   * @param value - The value to add to the node
   * @returns The node that was added
   * @public
   */
  public insertFirst(value: T) {
    this.insertAt(0, value);

    return this.head;
  }

  /**
   * inserts a node to the end of the list
   * @param value - The value to add to the node
   * @returns The node that was added
   * @public
   */
  insertLast(value: T) {
    this.insertAt(this.size, value);

    return this.tail;
  }

  /**
   * gets the node at the specified index
   * @param index - The index to get the node at
   * @returns The node at the specified index
   * @public
   */
  getAt(index: number) {
    return this.nodes[index];
  }

  /**
   * removes the node at the specified index
   * @param index - The index to remove the node at
   * @returns The node that was removed
   * @public
   */
  removeAt(index: number) {
    const previousNode = this.nodes[index - 1];
    const nextNode = this.nodes[index + 1] || null;
    const node = this.nodes[index];

    if (previousNode) previousNode.next = nextNode;

    this.nodes.splice(index, 1);

    return node;
  }

  /**
   * clears the list
   * @public
   */
  clear() {
    this.nodes = [];
  }

  /**
   * reverses the list
   * @public
   */
  reverse() {
    this.nodes = this.nodes.reduce(
      (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
      [] as LinkedListNode<T>[]
    );
  }

  map(fn: (value: T, index: number) => T) {
    return this.nodes.map(({ value }, index) => fn(value, index));
  }

  toString() {
    return this.nodes.map(({ value }) => value).join(",");
  }

  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}

export default LinkedList;
