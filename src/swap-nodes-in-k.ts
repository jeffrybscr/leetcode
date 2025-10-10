export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swap(node1: ListNode, k: number): ListNode | null {
  let current: ListNode | null = node1;
  const arr: ListNode[] = [];
  let deep = 1;
  while (deep <= k && current !== null) {
    if (current) {
      arr.push(current);
      current = current.next;
    }
    deep++;
  }

  if (deep <= k) {
    return node1;
  }
  const others = swap(current as ListNode, k);

  let head = arr.shift();
  if (head) {
    head.next = others;
    while (arr.length > 0) {
      const prev = arr.shift();
      if (prev) {
        prev.next = head;
        head = prev;
      }
    }
  }

  return head ? head : null;
}

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  let newHead = head;

  if (newHead && newHead.next) {
    newHead = swap(newHead, k);
  }

  return newHead;
}
