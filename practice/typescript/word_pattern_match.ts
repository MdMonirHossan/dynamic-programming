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
class WordPatternMatch {
  constructor(private str1: string, private str2: string) {
    this.str1 = str1;
    this.str2 = str2;
  }

  solution() {
    const splitStr2 = this.str2.split(" ");
    if (this.str1.length !== splitStr2.length) return false;

    let chToWord: Record<string, any> = {};
    let wordToCh: Record<string, any> = {};

    for (let i = 0; i < this.str1.length; i++) {
      if (
        Object.keys(chToWord).includes(this.str1[i]) &&
        chToWord[this.str1[i]] !== splitStr2[i]
      ) {
        return false;
      }
      if (
        Object.keys(wordToCh).includes(splitStr2[i]) &&
        wordToCh[splitStr2[i]] !== this.str1[i]
      ) {
        return false;
      }
      chToWord[this.str1[i]] = splitStr2[i];
      wordToCh[splitStr2[i]] = this.str1[i];
    }
    return true;
  }
}

const WordPatternMatchObj = new WordPatternMatch("abba", "dog cat cat fish");
console.log(WordPatternMatchObj.solution());
