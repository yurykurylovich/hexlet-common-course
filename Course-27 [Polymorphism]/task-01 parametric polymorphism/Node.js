class Node {
  constructor(value, node = null) {
    this.next = node;
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }
}

export default Node;
