import { convert } from "../src/zigzag-conversion";

describe("Zigzag Convert", () => {
  it.each([
    { s: "PAYPALISHIRING", numRows: 3, result: "PAHNAPLSIIGYIR" },
    { s: "PAYPALISHIRING", numRows: 4, result: "PINALSIGYAHRPI" },
    { s: "A", numRows: 1, result: "A" },
  ])("should pass $s $numRows $result", async ({ s, numRows, result }) => {
    expect(convert(s, numRows)).toStrictEqual(result);
  });
});
