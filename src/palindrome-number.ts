const MAX_NUMBER = 2 ** 31 - 1;
const MIN_NUMBER = 2 ** 31 * -1;

export function isPalindrome(x: number): boolean {
  if (x < MIN_NUMBER || x > MAX_NUMBER) {
    return false;
  }

  const numStr = x.toString();

  return numStr === numStr.split("").reverse().join("");
}
