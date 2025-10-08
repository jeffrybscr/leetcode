import { isValid } from "../src/valid-parentheses";

describe("Valid Parentheses", () => {
  it.each([
    { s: "()", result: true },
    { s: "()[]{}", result: true },
    { s: "(]", result: false },
    { s: "([])", result: true },
    { s: "([)]", result: false },
    { s: "[", result: false },
  ])("should pass $s $result", async ({ s, result }) => {
    expect(isValid(s)).toStrictEqual(result);
  });
});
