import { threeSum } from "../src/three-sum";

describe("3 Sum", () => {
  it.each([
    { nums: [], result: [] },
    {
      nums: [-1, 0, 1, 2, -1, -4],
      result: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    { nums: [0, 0, 0], result: [[0, 0, 0]] },
    { nums: [0, 0, 0, 0], result: [[0, 0, 0]] },
    { nums: [1, 1, -2], result: [[-2, 1, 1]] },
    {
      nums: [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10],
      result: [
        [-10, 5, 5],
        [-5, 0, 5],
        [-4, 2, 2],
        [-3, -2, 5],
        [-3, 1, 2],
        [-2, 0, 2],
      ],
    },
    {
      nums: [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0],
      result: [
        [-5, 1, 4],
        [-4, 0, 4],
        [-4, 1, 3],
        [-2, -2, 4],
        [-2, 1, 1],
        [0, 0, 0],
      ],
    },
    
  ])("should pass $nums $result", async ({ nums, result }) => {
    expect(threeSum(nums)).toStrictEqual(result);
  });
});
