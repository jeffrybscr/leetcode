import { addTwoNumbers, ListNode } from "../src/add-two-numbers";


const excessiveNodes = () => Array.from({ length: 101 }, () => 1);

const toList = (arr: number[]) => {
  const elements = arr.reverse()
  let lastValue = elements.shift();
  let lastNode = new ListNode(lastValue);
  while (elements.length > 0) {
    lastValue = elements.shift();
    lastNode = new ListNode(lastValue, lastNode);
  }

  return lastNode;
};

describe("Add Two Numbers", () => {
  it.each([
    { a1: null, a2: null, result: null },
    { a1: [0], a2: null, result: null },
    { a1: null, a2: [0], result: null },
    { a1: [0], a2: excessiveNodes(), result: null },
    { a1: excessiveNodes(), a2: [0], result: null },
    { a1: [-1], a2:[0], result: null },
    { a1: [0], a2: [-1], result: null },
    { a1: [11], a2: [0], result: null },
    { a1: [0], a2: [11], result: null },
    { a1: [0], a2: [0], result: [0] },
    {
      a1: [2,4,3],
      a2: [5,6,4],
      result: [7,0,8],
    },
    {
      a1: [0],
      a2:[0],
      result: [0],
    },
    {
      a1:[9,9,9,9,9,9,9],
      a2: [9,9,9,9],
      result: [8,9,9,9,0,0,0,1],
    },
  ])("should pass $a1 $a2 $result", async ({ a1, a2, result }) => {
    const l1 = a1 ? toList(a1): a1
    const l2 = a2 ? toList(a2): a2
    const l3 = result ? toList(result): result
    expect(addTwoNumbers(l1, l2)).toStrictEqual(l3);
  });
});
