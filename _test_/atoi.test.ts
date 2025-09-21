import { myAtoi } from "../src/atoi";

describe("Reverse Integer", () => {
  it.each([
    { s: "42", result: 42 },
    { s: " -042", result: -42 },
    { s: "1337c0d3", result: 1337 },
    { s: "0-1", result: 0 },
    { s: "words and 987", result: 0 },
    { s: "-91283472332", result: -2147483648 },
    { s: "+-12", result: 0 },
  ])("should pass $s $result", async ({ s, result }) => {
    expect(myAtoi(s)).toStrictEqual(result);
  });
});
