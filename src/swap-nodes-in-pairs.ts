export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swap(node1: ListNode, node2: ListNode | null): ListNode | null {
  if (node2 === null) {
    return node1;
  }

  node1.next = node2.next ? swap(node2.next, node2.next.next) : null;
  node2.next = node1;
  return node2;
}

export function swapPairs(head: ListNode | null): ListNode | null {
  let newHead = head;

  if (newHead && newHead.next) {
    newHead = swap(newHead, newHead.next);
  }

  return newHead;
}
