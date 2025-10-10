import { mergeTwoLists, ListNode } from "../src/merge-two-sorted-lists";

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

describe("Merge Two Lists", () => {
  it.each([
    { a1: [], a2: [], result: [] },
    { a1: [1,2,4], a2: [1,3,4], result: [1,1,2,3,4,4] },
    { a1: [], a2: [0], result: [0] }
  ])(
    "should pass $a1 $a2 $result",
    async ({ a1, a2, result }) => {
      const l1 = toList(a1);
      const l2 = toList(a2);
      
      const rawResults = mergeTwoLists(l1, l2)
      const results = toArray(rawResults)

      expect(results).toStrictEqual(result);
    }
  );
});
