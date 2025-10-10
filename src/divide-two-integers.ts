// function addSign(
//   num: number,
//   signDivisor: number,
//   signdividend: number
// ): number {
//   const sign =
//     signDivisor < 0 && signdividend < 0
//       ? 1
//       : signDivisor < 0 || signdividend < 0
//         ? -1
//         : 1;

//   const newNum = sign < 0 ? 0 - Math.abs(num) : Math.abs(num);

//   return newNum;
// }

// export function divide(dividend: number, divisor: number): number {
//   const signDivisor = Math.sign(divisor);
//   const signdividend = Math.sign(dividend);
//   const absDivisor = Math.abs(divisor);
//   let left = Math.abs(dividend);

//   if (absDivisor === 1) {
//     return addSign(
//       signDivisor < 0 && signdividend < 0 && dividend < 0 && left > 1
//         ? left - absDivisor
//         : left,
//       signDivisor,
//       signdividend
//     );
//   }
//   let count = 0;

//   while (absDivisor <= left) {
//     //count++;
//     //left = left - absDivisor;
//     let temp = left;
//     let multiple = 1;
//     while ((temp << 1) <= left) {
//       temp <<= 1;
//       multiple <<= 1;
//     }
//     count += multiple;
//     left -= temp;
//   }
//   return addSign(count, signDivisor, signdividend);
// }

export function divide(dividend: number, divisor: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  if (dividend === INT_MIN && divisor === -1) 
  {
    return INT_MAX; // overflow case
  }

  // Determine the sign of the result
  const negative = (dividend > 0) !== (divisor > 0);

  // Work with absolute values (as positive numbers)
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let result = 0;

  // Main loop: subtract largest shifted divisor
  while (a >= b) {
    let temp = b;
    let multiple = 1;

    // Find largest multiple of divisor (using bit shifts)
    while ((temp << 1) <= a && (temp << 1) > 0) {
      temp <<= 1;
      multiple <<= 1;
    }

    a -= temp;
    result += multiple;
  }

  // Apply sign
  result = negative ? -result : result;

  // Clamp to 32-bit range
  return Math.min(Math.max(result, INT_MIN), INT_MAX);
}
