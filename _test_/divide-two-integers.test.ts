import { divide } from "../src/divide-two-integers";

describe("Divide", () => {
  it.each([
    { dividend: -1, divisor: -1, result: 1 },
    { dividend: 1, divisor: -1, result: -1 },
    { dividend: 10, divisor: 3, result: 3 },
    { dividend: 7, divisor: -3, result: -2  },
    { dividend: 1, divisor: 1, result: 1  },
    { dividend: -1, divisor: 1, result: -1  },
    { dividend: -2147483648, divisor: -1, result: 2147483647  },
    { dividend: -2147483648, divisor: 4, result: -536870912  },
    { dividend: -2147483648, divisor: -2147483648, result: 1  },
  ])("should pass $dividend $divisor $result", async ({ dividend, divisor, result }) => {
    expect(divide(dividend, divisor)).toStrictEqual(result);
  });
});
