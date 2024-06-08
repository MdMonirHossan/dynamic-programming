class WordPattern {
  constructor(private readonly pattern: string, private readonly str: string) {
    this.pattern = pattern;
    this.str = str;
  }
  //   Both Time & Space Efficient
  is_match() {
    const splitStr: string[] = this.str.split(" ");
    if (this.pattern.length !== splitStr.length) return false;
    let chToWord: Record<string, any> = {};
    let wordToCh: Record<string, any> = {};

    for (let i = 0; i < this.pattern.length; i++) {
      if (
        Object.keys(chToWord).includes(this.pattern[i]) &&
        chToWord[this.pattern[i]] !== splitStr[i]
      ) {
        return false;
      }
      if (
        Object.keys(wordToCh).includes(splitStr[i]) &&
        wordToCh[splitStr[i]] !== this.pattern[i]
      ) {
        return false;
      }
      chToWord[this.pattern[i]] = splitStr[i];
      wordToCh[splitStr[i]] = this.pattern[i];
    }
    return true;
  }

  //  General Solution
  is_match1() {
    const splitStr: string[] = this.str.split(" ");
    let result: Record<string, any> = {};
    if (this.pattern.length !== splitStr.length) return false;
    for (let i = 0; i < this.pattern.length; i++) {
      if (!Object.keys(result).includes(this.pattern[i])) {
        if (Object.values(result).includes(splitStr[i])) {
          return false;
        }
        result[this.pattern[i]] = splitStr[i];
      } else if (result[this.pattern[i]] !== splitStr[i]) {
        return false;
      }
    }
    return true;
  }
}

const patternObj = new WordPattern("abba", "dog cat cat fish");

console.log(patternObj.is_match());
