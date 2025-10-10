export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swap(node1: ListNode | null, node2: ListNode | null): ListNode | null {
  if (node1 === null && node2 !== null) {
    return node2;
  }

  if (node1 !== null && node2 === null) {
    return node1;
  }

  if (node1 && node2) {
    const [main, first, second] =
      node1.val <= node2.val
        ? [node1, node1.next, node2]
        : [node2, node1, node2.next];
    main.next = swap(first, second);
    return main;
  }

  return null;
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head = swap(list1, list2);

  return head;
}
