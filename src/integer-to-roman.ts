const romans = new Map<number, string>([
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"],
]);

const toRoman = (n: number) => {
  return romans.get(n) || "";
};

const baseToRoman = (n: number, base: number) => {
  const roman = romans.get(base) || "";
  return Array(n).fill(roman).join("");
};

export function intToRoman(num: number): string {
  if (num < 1 || num > 3999) {
    return "";
  }

  let base = 1;
  let result = "";

  while (num > 0) {
    let numStr = "";
    const rad = num % 10;
    const n = rad * base;
    if (n > 0) {
      const roman = romans.get(n);
      if (roman) {
        numStr = roman;
      } else {
        if (rad > 5) {
          const radBase = [10, 100].includes(base) ? 5 * base : 5;
          numStr = toRoman(radBase).concat(baseToRoman(rad - 5, base));
        } else {
          numStr = baseToRoman(rad, base);
        }
      }

      result = numStr.concat(result);
    }
    base = base * 10;
    num = Math.floor(num / 10);
  }

  return result;
}
