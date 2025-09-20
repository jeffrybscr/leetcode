import { lengthOfLongestSubstring } from "../src/length-of-llongest-substring";

const excessiveLenth = () =>
  Array.from({ length: 5 * 10 ** 4 + 1 }, () => "1").join("");


const maxText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "
const almostExcessiveLenth = () =>
  Array.from({ length: 347 }, () => "1").join(maxText);

describe("Length Of Longest Substring", () => {
  it.each([
    { s: "", result: 0 },
    { s: excessiveLenth(), result: 0 },
    { s: "dvdf", result: 3 },
    { s: "abcabcbb", result: 3 },
    { s: "bbbbb", result: 1 },
    { s: "pwwkew", result: 3 },
    { s: almostExcessiveLenth(), result: 95 },
  ])("should pass $s $result", async ({ s, result }) => {
    expect(lengthOfLongestSubstring(s)).toStrictEqual(result);
  });
});
