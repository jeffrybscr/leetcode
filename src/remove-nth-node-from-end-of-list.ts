export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const listToArray = (head: ListNode) => {
  const arr = [];
  let cur: ListNode | null = head;
  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }

  return arr;
};

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head && head.next) {
    const arr = listToArray(head);

    const prev = arr[arr.length - n - 1];
    const next = arr[arr.length - n];

    if (prev === undefined) {
      return next.next;
    }

    if (prev && prev.next && next) {
      prev.next = next.next;
    }

    return head;
  }

  return null;
}
