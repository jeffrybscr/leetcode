const MAX_LENTGH = 10 ** 5;

export function maxArea(height: number[]): number {
  if (height.length > MAX_LENTGH) {
    return 0;
  }

  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let localMax = 0;
    const items = right - left;
    localMax = Math.min(height[left], height[right]) * items;
    max = Math.max(max, localMax);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
