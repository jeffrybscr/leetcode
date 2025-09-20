// function detectSubstring(elements: string[]): string[] {
//   let cancel = true;
//   let substring = "";
//   const newElements = [...elements]
//   const map: Map<string, boolean> = new Map();
//   while (newElements.length > 0 && cancel) {
//     const [current] = newElements;
//     if (!map.get(current)) {
//       map.set(current, true);
//       substring = substring.concat(current);
//       newElements.shift();
//     } else {
//       cancel = false;
//     }
//   }

//   if (newElements.length > 0) {
//     elements.shift();
//     const result = detectSubstring(elements);
//     return [...result, substring];
//   }

//   return [substring];
// }

function detectSubstring(elements: string[]): string[] {
  const arrResult: string[] = [];
  for (let currentIndex = 0; currentIndex < elements.length; currentIndex++) {
    //const current = elements[currentIndex];
    const map: Map<string, boolean> = new Map();
    let cancel = true;
    let substring = "";
    let i = currentIndex;
    while (i < elements.length && cancel) {
      
      const reminder = elements[i];
      if (!map.get(reminder)) {
        map.set(reminder, true);
        substring = substring.concat(reminder);
      } else {
        cancel = false;
      }
      i++;
    }
    arrResult.push(substring);
  }
  return arrResult;
}

const MAX_LENTH = 5 * 10 ** 4;

export function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 0 || s.length > MAX_LENTH) {
    return 0;
  }

  const elements = s.split("");
  const [result] = detectSubstring(elements)
    .map((x) => x.length)
    .sort((a, b) => b - a);
  return result;
}
