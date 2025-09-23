const romans = new Map<string, number>([
  ["I", 1],
  ["IV", 4],
  ["V", 5],
  ["IX", 9],
  ["X", 10],
  ["XL", 40],
  ["L", 50],
  ["XC", 90],
  ["C", 100],
  ["CD", 400],
  ["D", 500],
  ["CM", 900],
  ["M", 1000],
]);

export function romanToInt(s: string): number {
  if (s.length <= 0 || s.length > 15) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const first = s[i];
    const second = first.concat(i < s.length ? s[i + 1] : "");
    let value = romans.get(second);
    if (value === undefined) {
      value = romans.get(first) || 0;
    } else {
      i++;
    }

    total = total + value;
  }

  return total;
}
