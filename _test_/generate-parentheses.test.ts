import { generateParenthesis } from "../src/generate-parentheses";

describe("letterCombinations", () => {
  it.each([
    { n: 1, result: ["()"] },
    { n: 3, result: ["((()))","(()())","(())()","()(())","()()()"] },
  ])("should pass $n $result", async ({ n, result }) => {
    expect(generateParenthesis(n)).toStrictEqual(result);
  });
});
