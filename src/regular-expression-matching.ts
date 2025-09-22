/*
const findIndex = (s: string, p: string): number[] => {
  const results = [];
  const pLenth = p.length;
  for (let i = 0; i <= s.length - pLenth; i++) {
    const pos = s.substring(i, i + pLenth);
    if (pos === p) {
      results.push(i);
    }
  }
  return results;
};

const parseStars = (p: string): string[] => {
  const patterns: string[] = [];
  let previousPattern = "";
  let currentPattern = "";
  for (let i = 0; i < p.length; i++) {
    const pos = p[i];
    if (pos === "*") {
      if (previousPattern.length > 0) {
        patterns.push(previousPattern.concat("*", currentPattern));
      }
      previousPattern = currentPattern;
      currentPattern = "";
    } else {
      currentPattern = currentPattern.concat(pos);
    }
  }

  patterns.push(previousPattern.concat("*", currentPattern));

  return patterns;
};

function regExMatchMultipleStar(s: string, p: string): boolean {
  const patterns = parseStars(p);

  const results = patterns
    .map((p) => regExMatchOneStar(s, p))
    .filter((x) => x === true);

  return results.length === 0 ? false : true;
}

function regExMatchOneStar(s: string, p: string): boolean {
  const str = s.split("");
  const pattern = p.split("");
  let star = false;
  while (str.length > 0) {
    const a1 = str.shift();
    if (a1) {
      if (star === false) {
        const b1 = pattern.shift();
        if (b1) {
          if (b1 === ".") {
            continue;
          } else if (b1 === "*") {
            star = true;
            continue;
          } else if (a1 !== b1) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }

  return true;
}

export function isMatch(s: string, p: string): boolean {
  if (s.length < 1 || s.length > 20 || p.length < 1 || p.length > 20) {
    return false;
  }

  const starDots =  findIndex(p, "*.")

  if (starDots.length > 0) {
    return false;
  }

  if (p.split("*").length < 3) {
    return regExMatchOneStar(s, p);
  } else {
    return regExMatchMultipleStar(s, p);
  }
}
*/

/*

export function isMatch(s: string, p: string): boolean {
    let m = s.length, n = p.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    
    dp[0][0] = true; 
    
    // Initialize for patterns like a*, a*b*, etc.
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // Case 1: zero occurrence of preceding element
                dp[i][j] = dp[i][j - 2];
                
                // Case 2: one or more occurrence
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }
    
    return dp[m][n];
};
*/

export function isMatch(s: string, p: string): boolean {
  const cols = s.length;
  const rows = p.length;

  if (cols < 1 || cols > 20 || rows < 1 || rows > 20) {
    return false;
  }

  const matrix: boolean[][] = Array.from({ length: rows + 1 }, () =>
    Array(cols + 1).fill(false)
  );

  



  return false;
}
