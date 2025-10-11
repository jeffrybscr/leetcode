function toMap(words: string[]): Map<string, boolean> {
  const newMap: Map<string, boolean> = new Map();
  words.map((x) => {
    if (newMap.get(x) === false) {
      //duplicates
      let noDuplicates = true;
      let index = 1;
      while (noDuplicates) {
        const key = `${x}_${index}`;
        const dupindx = newMap.get(key);
        if (dupindx === undefined) {
          newMap.set(key, false);
          noDuplicates = false;
        }
        index++;
      }
    } else {
      newMap.set(x, false);
    }
  });
  return newMap;
}

class Memento {
  private ogMap: Map<string, boolean>;
  private iterMap: Map<string, boolean>;
  private calls = 0;
  constructor(private words: string[]) {
    this.ogMap = toMap(words);
    this.iterMap = new Map(this.ogMap);
  }

  reset() {
    this.iterMap = new Map(this.ogMap);
    this.calls = 0;
  }

  check(word: string): boolean {
    let result = false;

    this.calls++;
    const search = this.iterMap.get(word);

    if (search === false) {
      this.iterMap.set(word, true);
      result = true;
    } else if (search === true) {
      //check if duplicates
      let noDuplicates = true;
      let index = 1;
      while (noDuplicates) {
        const key = `${word}_${index}`;
        const dupindx = this.iterMap.get(key);
        if (dupindx === undefined) {
          noDuplicates = false;
        } else if (dupindx === false) {
          this.iterMap.set(key, true);
          result = true;
          noDuplicates = false;
        }
        index++;
      }
    }

    return result;
  }

  isComplete(): boolean {
    if (this.calls >= this.words.length) {
      const complete = Array.from(this.iterMap.values()).every(
        (x) => x === true
      );
      return complete;
    }

    return false;
  }
}

export function findSubstring(s: string, words: string[]): number[] {
  if (words.length > 0) {
    const wordLenth = words[0].length;

    if (wordLenth * words.length > s.length) {
      return [];
    }

    //const wordJumps = (s.length / wordLenth) | 0;

    const memento = new Memento(words);
    const results: number[] = [];
    let pos = 0;

    for (let j = 0; j < s.length; j++) {
      memento.reset();
      pos = j;
      const wordJumps = (s.length - j / wordLenth) | 0;
      for (let i = 0; i < wordJumps; i++) {
        const index = i * wordLenth + j;
        if (memento.check(s.substring(index, index + wordLenth))) {
          if (memento.isComplete()) {
            results.push(pos);
            break;
          }
        } else {
          break;
        }
      }
    }
    return results;
  }

  return [];
}
