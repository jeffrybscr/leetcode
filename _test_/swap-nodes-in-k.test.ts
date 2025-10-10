import { reverseKGroup, ListNode } from "../src/swap-nodes-in-k";

const toList = (h: number[]): ListNode | null => {
  let head: ListNode | null = null;

  for (let i = h.length - 1; i >= 0; i--) {
    const num = h[i];
    const newNode: ListNode = new ListNode(num, head);
    head = newNode;
  }

  return head;
};

const toArray = (head: ListNode | null): number[] => {
  if (head) {
    const arr: number[] = [];
    let cur = head;
    while (cur.next) {
      arr.push(cur.val);
      cur = cur.next;
    }

    arr.push(cur.val);

    return arr;
  }

  return [];
};

describe("Swap Pairs Lists", () => {
  it.each([
    { a: [], k: 0, result: [] },
    { a: [1], k: 0, result: [1] },
    { a: [1, 2, 3, 4, 5], k: 2, result: [2, 1, 4, 3, 5] },
    { a: [1, 2, 3, 4, 5], k: 3, result: [3, 2, 1, 4, 5] },
  ])("should pass $a $k $result", async ({ a, k, result }) => {
    const l1 = toList(a);

    const rawResults = reverseKGroup(l1, k);
    const results = toArray(rawResults);

    expect(results).toStrictEqual(result);
  });
});
