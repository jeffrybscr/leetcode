import { letterCombinations } from "../src/letter-combinations-of-a-hone-number";

describe("letterCombinations", () => {
  it.each([
    { s: "", result: [] },
    { s: "2", result: ["a","b","c"] },
    { s: "23", result: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] },
  ])("should pass $s $result", async ({ s, result }) => {
    expect(letterCombinations(s)).toStrictEqual(result);
  });
});
