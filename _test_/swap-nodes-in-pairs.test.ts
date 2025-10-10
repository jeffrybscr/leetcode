import { swapPairs, ListNode } from "../src/swap-nodes-in-pairs";

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
    { a: [], result: [] },
    { a: [1], result: [1] },
    { a: [1], result: [1] },
    { a: [1,2,3], result: [2,1,3] },
    { a: [1,2,3,4], result: [2,1,4,3] },
  ])(
    "should pass $a $result",
    async ({ a, result }) => {
      const l1 = toList(a);
      
      const rawResults = swapPairs(l1)
      const results = toArray(rawResults)

      expect(results).toStrictEqual(result);
    }
  );
});
