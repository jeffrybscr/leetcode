import { isMatch } from "../src/regular-expression-matching";

describe.skip("Regular Expression Matching", () => {
  it.each([
    { s: "", p: "", result: true },
    { s: "aa", p: "a", result: false },
    { s: "aa", p: "a*", result: true },
    { s: "aa", p: "a.", result: true },
    { s: "ab", p: ".*", result: true },
    //{ s: "ab", p: "*.", result: false },
    { s: "aab", p: "c*a*b", result: true },
    { s: "mississippi", p: "mis*is*p*.", result: false },
    { s: "mississippi", p: "mis*is*ip*.", result: true },
  ])("should pass $s $p $result", async ({ s, p, result }) => {
    expect(isMatch(s, p)).toStrictEqual(result);
  });
});
