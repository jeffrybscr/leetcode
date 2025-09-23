export function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 1 || strs.length > 200) {
    return "";
  }

  let next = true;
  let result = "";
  let i = 0;
  while (next) {
    let current = "";
    for (const str of strs) {
      if (str === "") {
        return "";
      }
      if (i < str.length && (current === "" || str[i] === current)) {
        current = str[i];
      } else {
        next = false;
        break;
      }
    }
    if (next) {
      result = result.concat(current);
      i++;
    }
  }

  return result;
}
