function generate(
  ans: string[],
  open: number,
  close: number,
  n: number,
  curr: string
) {
  if (open + close == 2 * n && open == close) {
    ans.push(curr);
    return;
  }
  if (open < n) {
    generate(ans, open + 1, close, n, curr + "(");
  }
  if (close < open) {
    generate(ans, open, close + 1, n, curr + ")");
  }
}

export function generateParenthesis(n: number): string[] {
  const results: string[] = [];

  generate(results, 0, 0, n, "");

  return results;
}
