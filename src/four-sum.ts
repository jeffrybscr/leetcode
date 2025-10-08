// enum CHANGE_TYPE {
//   INCRESE_START = "INCRESE_START",
//   INCRESE_MIDDLE = "INCRESE_MIDDLE",
//   INCRESE_END = "INCRESE_END",
// }

// const deduplicate = (numbs: number[][]): number[][] => {
//   const map: Map<string, number[]> = new Map();
//   const final = [];
//   for (const arr of numbs) {
//     const key = arr.toString();
//     if (!map.get(key)) {
//       map.set(key, arr);
//       final.push(arr);
//     }
//   }

//   return final.sort((a, b) => a[0] - b[0]);
// };

// export function fourSum(nums: number[], target: number): number[][] {
//   if (nums.length < 4 || nums.length > 200) {
//     return [];
//   }

//   let changeType: CHANGE_TYPE = CHANGE_TYPE.INCRESE_MIDDLE;
//   const sequence = nums.sort((a, b) => a - b);
//   const results: number[][] = [];
//   for (let i = 0; i < sequence.length - 1; i++) {
//     if (i > 0 && sequence[i] == sequence[i - 1]) {
//       continue;
//     }
//     let start = i + 1;
//     let end = sequence.length - 1;
//     let middle = end - 1;

//     while (middle < end && start < middle) {
//       const sum =
//         sequence[i] + sequence[start] + sequence[middle] + sequence[end];
//       if (sum === target) {
//         results.push([
//           sequence[i],
//           sequence[start],
//           sequence[middle],
//           sequence[end],
//         ]);
//         changeType = CHANGE_TYPE.INCRESE_MIDDLE;
//       } else if (sum >= 0) {
//         if (middle - 1 === start) {
//           // end--;
//           // middle = end - 1;
//           changeType = CHANGE_TYPE.INCRESE_END;
//         } else {
//           //middle--;
//           changeType = CHANGE_TYPE.INCRESE_MIDDLE;
//         }

//         //continue;
//       } else {
//         // start++;
//         // middle = end - 1;
//         // continue;

//         // if (changeType === CHANGE_TYPE.INCRESE_MIDDLE) {
//         //   changeType = CHANGE_TYPE.INCRESE_END;
//         // } else {
//         //   changeType = CHANGE_TYPE.INCRESE_START;
//         // }

//         changeType = CHANGE_TYPE.INCRESE_START;
//       }

//       // if (middle - 1 === start) {
//       //   end--;
//       //   middle = end - 1;
//       // } else {
//       //   middle--;
//       // }
//       // if (middle - 1 === start) {
//       //   end--;
//       //   middle = end - 1;
//       // } else {
//       //   middle--;
//       // }

//       switch (changeType) {
//         case CHANGE_TYPE.INCRESE_MIDDLE:
//           middle--;
//           break;

//         case CHANGE_TYPE.INCRESE_START:
//           start++;
//           middle = end - 1;
//           break;

//         case CHANGE_TYPE.INCRESE_END:
//           end--;
//           middle = end - 1;
//           break;
//       }
//     }
//   }

//   console.log("===>deduplicate(results)", deduplicate(results));

//   return deduplicate(results);
// }

enum CHANGE_TYPE {
  FIRST,
  INCRESE_START,
  INCRESE_MIDDLE,
  INCRESE_END,
}

const nextMove = (
  sum: number,
  target: number,
  currentChange: CHANGE_TYPE
): CHANGE_TYPE => {
  if (sum === target) {
    // if (currentChange === CHANGE_TYPE.INCRESE_MIDDLE) {
    //   return CHANGE_TYPE.INCRESE_END;
    // }

    // if (currentChange === CHANGE_TYPE.INCRESE_END) {
    //   return CHANGE_TYPE.INCRESE_START;
    // }

    return CHANGE_TYPE.INCRESE_MIDDLE;
  } else if (sum >= 0) {
    return CHANGE_TYPE.INCRESE_MIDDLE;
  } else {
    if (currentChange === CHANGE_TYPE.INCRESE_MIDDLE) {
      return CHANGE_TYPE.INCRESE_END;
    }
    return CHANGE_TYPE.INCRESE_START;
  }

  return CHANGE_TYPE.INCRESE_MIDDLE;
};

const deduplicate = (numbs: number[][]): number[][] => {
  const map: Map<string, number[]> = new Map();
  const final = [];
  for (const arr of numbs) {
    const key = arr.toString();
    if (!map.get(key)) {
      map.set(key, arr);
      final.push(arr);
    }
  }

  return final.sort((a, b) => a[0] - b[0]);
};

export function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4 || nums.length > 200) {
    return [];
  }

  const results: number[][] = [];

  let changeType: CHANGE_TYPE = CHANGE_TYPE.FIRST;
  const sequence = nums.sort((a, b) => a - b);

  for (let i = 0; i < sequence.length - 1; i++) {
    let start = 1;
    let end = sequence.length - 1;
    let middle = end - 1;

    while (middle < end && start < middle) {
      const sum =
        sequence[i] + sequence[start] + sequence[middle] + sequence[end];
      if (sum === target && i !== start && start !== middle && middle !== end) {
        results.push([
          sequence[i],
          sequence[start],
          sequence[middle],
          sequence[end],
        ]);
      }

      changeType = nextMove(sum, target, changeType);

      switch (changeType) {
        case CHANGE_TYPE.INCRESE_MIDDLE:
          middle--;
          break;

        case CHANGE_TYPE.INCRESE_START:
          start++;
          end = sequence.length - 1;
          middle = end - 1;
          break;

        case CHANGE_TYPE.INCRESE_END:
          end--;
          middle = end - 1;
          break;
      }
    }
  }

  console.log("=====>deduplicate(results);", deduplicate(results));

  return deduplicate(results);
}
