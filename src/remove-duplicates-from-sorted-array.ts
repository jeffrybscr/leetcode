export function removeDuplicates(nums: number[]): number {
  const map: Set<number> = new Set<number>();

  const ogSize = nums.length

  while (nums.length > 0) {
    const num = nums.shift();
    if (num!== undefined) {
      map.add(num);
    }
  }

  nums.push(...map)
  nums.push(...Array(ogSize - nums.length).fill(0))
  

  return map.size;
}
