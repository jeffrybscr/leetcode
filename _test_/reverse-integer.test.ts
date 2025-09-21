import { reverse } from "../src/reverse-integer";

describe("Reverse Integer", () => {
  it.each([
    { x: 123, result: 321 },
    { x: -123, result: -321 },
    { x: 120, result: 21 },
  ])("should pass $x $result", async ({ x, result }) => {
    expect(reverse(x)).toStrictEqual(result);
  });
});
