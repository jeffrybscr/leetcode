const deduplicate = (numbs: number[][]): number[][] => {
  const map: Map<string, number[]> = new Map();
  const final = [];
  for (const arr of numbs) {
    const key = arr.toString();
    if (!map.get(key)) {
      map.set(key, arr);
      final.push(arr);
    }
  }

  return final.sort((a, b) => a[0] - b[0]);
};

export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3 || nums.length > 3000) {
    return [];
  }

  if (nums.every((num) => num === 0)) {
    return [[0, 0, 0]];
  }

  const sequence = nums.sort((a, b) => a - b);
  const results: number[][] = [];
  for (let i = 0; i < sequence.length - 1; i++) {
    if (i > 0 && sequence[i] == sequence[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = sequence.length - 1;
    while (start < end) {
      const sum = sequence[i] + sequence[start] + sequence[end];
      if (sum === 0) {
        results.push([sequence[i], sequence[start], sequence[end]]);
      } else if (sum > 0) {
        end--;
        continue;
      } else {
        start++;
        continue;
      }

      start++;
      end--;
    }
  }

  return deduplicate(results);
}
