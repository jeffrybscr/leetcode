import {
  removeNthFromEnd,
  ListNode,
} from "../src/remove-nth-node-from-end-of-list";

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

describe("Remove Nth Node From End of List", () => {
  it.each([
    { h: [1, 2, 3, 4, 5], n: 2, result: [1, 2, 3, 5] },
    { h: [1], n: 1, result: [] },
    { h: [1,2], n: 1, result: [1] },
    { h: [1,2], n: 2, result: [2] }
])(
    "should pass $h $n $result",
    async ({ h, n, result }) => {
      const head = toList(h);

      const raw = removeNthFromEnd(head, n);

      const r = toArray(raw);

      console.log("===>",r )

      expect(r).toStrictEqual(result);
    }
  );
});
