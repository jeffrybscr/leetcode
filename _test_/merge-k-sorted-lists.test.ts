import { mergeKLists, ListNode } from "../src/merge-k-sorted-lists";

const toList = (h: number[][]): (ListNode | null)[] => {
  const arr: (ListNode | null)[] = [];

  for (let j = h.length - 1; j >= 0; j--) {
    const row = h[j];
    let head: ListNode | null = null;
    for (let i = row.length - 1; i >= 0; i--) {
      const num = row[i];
      const newNode: ListNode = new ListNode(num, head);
      head = newNode;
    }

    arr.push(head);
  }

  return arr;
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
    { a: [], result: [] },
    { a: [[]], result: [] },
    {
      a: [[1,4,5],[1,3,4],[2,6]],
      result: [1, 1, 2, 3, 4, 4, 5, 6],
    },
  ])("should pass $a  $result", async ({ a, result }) => {
    const l1 = toList(a);

    const rawResults = mergeKLists(l1);
    const results = toArray(rawResults);

    console.log("===>results", rawResults, results);

    expect(results).toStrictEqual(result);
  });
});
