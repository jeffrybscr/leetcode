const MAX_LENTH = 10000;
const MIN_LENTH = 2;
const MAX_NUMBER = 1000000000;
const MIN_NUMBER = 1000000000 * -1;


function twoSumBruteForce(numbers: number[], target: number): number[] {
  for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
    const currentValue = numbers[currentIndex];
    for (let i = currentIndex + 1; i < numbers.length; i++) {
      if (currentValue + numbers[i] === target) {
        return [currentIndex, i];
      }
    }
  }

  return [-1, -1];
}

export function twoSum(nums: number[], target: number): number[] {
  if (
    nums.length < MIN_LENTH ||
    nums.length > MAX_LENTH ||
    target < MIN_NUMBER ||
    target > MAX_NUMBER
  ) {
    return [-1, -1];
  }

  return twoSumBruteForce(nums, target);
}
