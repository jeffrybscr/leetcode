import { longestCommonPrefix } from "../src/longest-common-prefix";


describe("Length Of Longest Substring", () => {
  it.each([
    { s: [""], result: "" },
    { s: ["fla", "fle", ""], result: "" },
    { s: ["flower", "flow", "flight"], result: "fl" },
    { s: ["dog","racecar","car"], result: "" },
  ])("should pass $s $result", async ({ s, result }) => {
    expect(longestCommonPrefix(s)).toStrictEqual(result);
  });
});
