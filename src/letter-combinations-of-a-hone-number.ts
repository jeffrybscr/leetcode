const phoneNumbers: Map<string, string[]> = new Map([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);

const combine = (a1: string[], a2: string[]) => {
  const mix: string[] = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      mix.push(a1[i].concat(a2[j]));
    }
  }

  return mix;
};

export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  if (digits.length === 1) {
    return phoneNumbers.get(digits) || [];
  }

  let mix: string[] = [""];
  for (let i = 0; i < digits.length; i++) {
    const first = phoneNumbers.get(digits[i]) || [""];

    mix = combine(mix, first);
  }

  return mix;
}
