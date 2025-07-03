/**
  290. Word Pattern
  Given a pattern and a string s, find if s follows the same pattern.
  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

  Each letter in pattern maps to exactly one unique word in s.
  Each unique word in s maps to exactly one letter in pattern.
  No two letters map to the same word, and no two words map to the same letter.
  
  Example 1:
  Input: pattern = "abba", s = "dog cat cat dog"
  Output: true
  Explanation:
  The bijection can be established as:
  'a' maps to "dog".
  'b' maps to "cat".
  
  Example 2:
  Input: pattern = "abba", s = "dog cat cat fish"
  Output: false

  Example 3:
  Input: pattern = "aaaa", s = "dog cat cat dog"
  Output: false

  Constraints:
  1 <= pattern.length <= 300
  pattern contains only lower-case English letters.
  1 <= s.length <= 3000
  s contains only lowercase English letters and spaces ' '.
  s does not contain any leading or trailing spaces.
  All the words in s are separated by a single space. 
*/
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
