class WordPattern {
  constructor(private readonly pattern: string, private readonly str: string) {
    this.pattern = pattern;
    this.str = str;
  }

  is_match() {
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

const patternObj = new WordPattern("abbb", "dog cat cat dog");

console.log(patternObj.is_match());
