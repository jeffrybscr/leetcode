import { removeDuplicates } from "../src/remove-duplicates-from-sorted-array";

describe("Remove Duplicates", () => {
  it.each([
    { a: [1,1,2], result: 2, result2: [1,2,0] },
    { a: [0,0,1,1,1,2,2,3,3,4], result: 5, result2: [0,1,2,3,4,0,0,0,0,0] },
  ])("should pass $a $result", async ({ a, result, result2 }) => {
    const r = removeDuplicates(a)
    console.log("===>1",a)
    expect(r).toStrictEqual(result);
    expect(a).toStrictEqual(result2);
  });
});
