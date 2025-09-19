export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const MAX_LIST_LENTH = 100;

function toArray(head: ListNode, deep: number): number[] | null {
  if (deep >= MAX_LIST_LENTH || head.val > 9 || head.val < 0) {
    return null;
  }

  if (head.next) {
    const arr = toArray(head.next, deep + 1);
    return arr ? [...arr, head.val] : null;
  }

  return [head.val];
}

const toList = (value: bigint) => {
  const elements = value
    .toString()
    .split("")
    .map((x) => Number(x));

  let lastValue = elements.shift();
  let lastNode = new ListNode(lastValue);
  while (elements.length > 0) {
    lastValue = elements.shift();
    lastNode = new ListNode(lastValue, lastNode);
  }

  return lastNode;
};

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 && l2) {
    const a1 = toArray(l1, 0);
    const a2 = toArray(l2, 0);
    if (a1 && a2) {
      const num1 = BigInt(a1.map((x) => x.toString()).join(""));
      const num2 = BigInt(a2.map((x) => x.toString()).join(""));

      const sum = num1 + num2;

      const result = toList(sum)

      console.log("===>result",num1, num2,sum, result)

      return result;
    }
  }

  return null;
}
