const VALUE_MAP = new Map<string, number>([
  ["0", 0],
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
]);

const MAX_NUMBER = 2 ** 31 - 1;
const MIN_NUMBER = 2 ** 31 * -1;

function atoi(s: string): number {
  let num: number = 0;
  let multiplier = 1;
  let hasReadNumber = false;

  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    if (hasReadNumber === false && [" ", "-", "+"].includes(val)) {

      if (["-", "+"].includes(val)) {
        hasReadNumber = true;
      }

      if (val === "-") {
        multiplier = -1;
      }
      continue;
    }

    const newNumber = VALUE_MAP.get(val);
    if (newNumber === undefined) {
      break;
    }

    hasReadNumber = true;

    if (num === 0 && newNumber === 0) {
      continue;
    }

    num = num * 10 + newNumber;
  }

  return num * multiplier;
}

export function myAtoi(s: string): number {
  if (s.length === 0 || s.length > 200) {
    return 0;
  }

  const result = atoi(s);

  return result > MAX_NUMBER
    ? MAX_NUMBER
    : result < MIN_NUMBER
      ? MIN_NUMBER
      : result;
}
