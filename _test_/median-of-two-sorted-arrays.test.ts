import { findMedianSortedArrays } from "../src/median-of-two-sorted-arrays";

const excessiveArray = () => Array.from({ length: 1001 }, () => 1);

describe("Find Median Sorted Arrays", () => {
  it.each([
    { nums1: [], nums2: [2], result: 2 },
    { nums1: [1,3], nums2: [], result: 2 },
    { nums1: [1,3], nums2: [1000012], result: 0 },
    { nums1: excessiveArray(), nums2: [2], result: 0 },
    { nums1: [2], nums2: excessiveArray(), result: 0 },
    { nums1: [1,3], nums2: [2], result: 2 },
    { nums1: [1,2], nums2: [3,4], result: 2.5 },
    { nums1: [], nums2: [1], result: 1 },
    { nums1: [0,0,0,0,0], nums2: [-1,0,0,0,0,0,1], result: 0 },
  ])("should pass $nums1 $nums2 $result", async ({ nums1, nums2, result }) => {
    expect(findMedianSortedArrays(nums1, nums2)).toStrictEqual(result);
  });
});
