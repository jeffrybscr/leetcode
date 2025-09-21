function reverseNumber(n: number): number {
  let num = Math.abs(n);
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversed * Math.sign(n);
}

const MAX_NUMBER = 2 ** 31 - 1;
const MIN_NUMBER = 2 ** 31 * -1;

export function reverse(x: number): number {
  if (x < MIN_NUMBER || x > MAX_NUMBER) {
    return 0;
  }

  const result = reverseNumber(x);
  return result < MIN_NUMBER || result > MAX_NUMBER ? 0 : result;
}
