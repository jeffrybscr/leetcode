import { isPalindrome } from "../src/palindrome-number";

describe("Reverse Integer", () => {
  it.each([
    { x: 121, result: true },
    { x: -121, result: false },
    { x: 10, result: false },
  ])("should pass $x $result", async ({ x, result }) => {
    expect(isPalindrome(x)).toStrictEqual(result);
  });
});
