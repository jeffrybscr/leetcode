const Parentheses: Map<string, string> = new Map([
  ["{", "}"],
  ["(", ")"],
  ["[", "]"],
]);

const ReverseParentheses = new Map(
  Array.from(Parentheses.entries()).map((x) => [x[1], x[0]])
);

const OPEN = Array.from(Parentheses.keys());
const CLOSE = Array.from(Parentheses.values());

export function isValid(s: string): boolean {
  if (s.length <= 1) {
    return false;
  }

  const arr = s.split("");

  const open = [];

  for (let i = 0; i < arr.length; i++) {
    if (OPEN.includes(arr[i])) {
      open.push(arr[i]);
    }
    if (CLOSE.includes(arr[i])) {
      const closing = ReverseParentheses.get(arr[i]);
      const opening = open.pop();
      if (closing !== opening) {
        return false;
      }
    }
  }

  if(open.length > 0){
    return false
  }

  return true;
}
