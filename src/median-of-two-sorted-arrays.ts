const MAX_NUMBER = 10 ** 6;
const MIN_NUMBER = MAX_NUMBER * -1;
const MAX_LENTH = 1000;

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  if (
    nums1.length + nums2.length < 1 ||
    nums1.length > MAX_LENTH ||
    nums2.length > MAX_LENTH
  ) {
    return 0;
  }

  const totalLenth = nums1.length + nums2.length;
  const mod = totalLenth % 2;

  const postions = [];
  let findPosition = 0;

  if (mod === 0) {
    const p1 = totalLenth / 2 - 1;
    postions.push(p1);
    findPosition = p1 + 1;
  } else {
    findPosition = Math.ceil(totalLenth / 2) - 1;
  }

  postions.push(findPosition);

  let i = 0;
  let a = nums1.shift();
  let b = nums2.shift();
  let lastValue = 0;
  let previousValue = lastValue;
  while (i <= findPosition) {
    if (
      a &&
      b &&
      (a < MIN_NUMBER || b < MIN_NUMBER || a > MAX_NUMBER || b > MAX_NUMBER)
    ) {
      return 0;
    } else {
      previousValue = lastValue;

      if (a !== undefined && b !== undefined) {
        if (a <= b) {
          lastValue = a;
          a = nums1.shift();
        } else {
          lastValue = b;
          b = nums2.shift();
        }
      } else if (a) {
        lastValue = a;
        a = nums1.shift();
      } else if (b) {
        lastValue = b;
        b = nums2.shift();
      }
    }

    i++;
  }

  return mod === 0 ? (previousValue + lastValue) / 2 : lastValue;
}
