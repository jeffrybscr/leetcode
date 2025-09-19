import { twoSum } from "../src/two-sum";

describe("Two Sum", () => {
  it.each([
    { nums: [], target: 0, result: [-1, -1] },
    { nums: [0], target: 0, result: [-1, -1] },
    { nums: [0, 0], target: 1000000001, result: [-1, -1] },
    { nums: [0, 0], target: -1000000001, result: [-1, -1] },
    { nums: [2, 7, 11, 15], target: 9, result: [0, 1] },
    { nums: [3, 2, 4], target: 6, result: [1, 2] },
    { nums: [3, 3], target: 6, result: [0, 1] },
  ])("should pass $nums $target $result", async ({ nums, target, result }) => {
    expect(twoSum(nums, target)).toStrictEqual(result);
  });
});
