
// const MAX_LENGTH = 1000;

// const isPalindrome = (str: string) => str === reverseString(str);

// export class Edge {
//   val: string;
//   nodes: Map<string, Edge> | undefined;
//   constructor(val: string, nodes?: Map<string, Edge>) {
//     this.val = val;
//     this.nodes = nodes;
//   }

//   addNode(e: Edge): this {
//     if (!this.nodes) {
//       this.nodes = new Map();
//     }

//     this.nodes.set(e.val, e);

//     return this;
//   }
// }

// class Graph {
//   private adj = new Map<string, Edge>();
//   private currentEdge: Edge;

//   private previousMatch: boolean = false;
//   private previousNodeMatch: Edge | undefined;
//   private substringMatch: string = "";

//   addVertex(v: string): Edge {
//     const edge = this.adj.get(v) || new Edge(v);

//     if (!this.adj.get(v)) {
//       this.adj.set(v, edge);
//     }

//     if (!this.currentEdge) {
//       this.currentEdge = edge;
//       return edge;
//     }

//     this.currentEdge.addNode(edge);
//     this.currentEdge = edge;

//     return edge;
//   }

//   findPalindrome(v: string): string | false {
//     if (
//       this.previousMatch === true &&
//       this.previousNodeMatch?.nodes?.get(v) !== undefined
//     ) {
//       const edge = this.previousNodeMatch?.nodes?.get(v);
//       if (edge) {
//         this.previousNodeMatch = edge;
//         this.substringMatch = this.substringMatch.concat(edge.val);
//       }

//       const checkIsPalindrome = isPalindrome(this.substringMatch);

//       if (checkIsPalindrome) {
//         return this.substringMatch;
//       }

//       const newSubstringMatch = this.substringMatch.split("");
//       while (newSubstringMatch.length > 0) {
//         newSubstringMatch.shift();
//         if (isPalindrome(newSubstringMatch.join(""))) {
//           return newSubstringMatch.join("");
//         }
//       }

//       return false;
//     } else {
//       this.previousMatch = false;
//       this.previousNodeMatch = undefined;
//       this.substringMatch = "";
//     }

//     const edge = this.adj.get(v);

//     if (edge) {
//       this.previousMatch = true;
//       this.previousNodeMatch = edge;
//       this.substringMatch = edge.val;
//       return this.substringMatch;
//     }
//     this.previousMatch = false;
//     this.previousNodeMatch = undefined;
//     this.substringMatch = "";
//     return false;
//   }
// }

// const isAlphanumeric = (str: string): boolean => /^[a-z0-9]+$/i.test(str);

// const reverseString = (str: string) => [...str].reverse().join("");

// export function longestPalindrome(s: string): string {
//   if (s.length === 0 || s.length > MAX_LENGTH || !isAlphanumeric(s)) {
//     return "";
//   }

//   if (isPalindrome(s)) {
//     return s;
//   }

//   const palindromes = [s[0]];

//   const graph = new Graph();

//   for (let i = 0; i < s.length; i++) {
//     graph.addVertex(s[i]);
//   }

//   const reverse = reverseString(s);

//   for (let i = 0; i < s.length; i++) {
//     const palindrome = graph.findPalindrome(reverse[i]);
//     if (palindrome) {
//       palindromes.push(palindrome);
//     }
//   }

//   return palindromes.sort((a, b) => b.length - a.length)[0];
// }


export function longestPalindrome(s: string): string {
  if (!s || s.length <= 1) { return s }
  let longestPalindrome = s.substring(0, 1)

  for (let i = 0; i < s.length; i++) {
    const e1 = expand(s, i, i);
    const e2 = expand(s, i, i + 1);
    
    [e1, e2].forEach((maybeLongest) => {
      if (maybeLongest.length > longestPalindrome.length) {
          longestPalindrome = maybeLongest
      }
    })
  }

  return longestPalindrome
}

function expand(s: string, begin: number, end: number): string {
  while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--
    end++
  }

  return s.substring(begin + 1, end)
}
