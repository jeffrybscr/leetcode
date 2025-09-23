export function threeSumClosest(nums: number[], target: number): number {

  if (nums.length < 3 || nums.length > 3000) {
    return 0;
  }

  if (nums.every((num) => num === 0)) {
    return 0;
  }

  const sequence = nums.sort((a, b) => a - b);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (i > 0 && sequence[i] == sequence[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = sequence.length - 1;
    while (start < end) {
      const sum = sequence[i] + sequence[start] + sequence[end];
      result = Math.abs(sum - target) < Math.abs(result - target) ? sum : result
      if (sum === target) {
        return sum
      } else if (sum > target) {
        end--;
        continue;
      } else {        
        start++;
        continue;
      }

    }
  }

  return result
}
