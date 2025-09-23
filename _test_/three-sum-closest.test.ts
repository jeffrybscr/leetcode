import { threeSumClosest } from "../src/three-sum-closest";

describe("3 Sum Closest", () => {
  it.each([
    { nums: [0,0,0], target: 1, result: 0 },
    { nums: [-1, 2, 1, -4], target: 1, result: 2 },
    { nums: [0,1,2], target: 0, result: 3 }
  ])(
    "should pass $nums $target $result",
    async ({ nums, target, result }) => {
      expect(threeSumClosest(nums, target)).toStrictEqual(result);
    }
  );
});
