/**
  242. Valid Anagram
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true

  Example 2:
  Input: s = "rat", t = "car"
  Output: false

  Constraints:
  1 <= s.length, t.length <= 5 * 104
  s and t consist of lowercase English letters.
  Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

interface CountObject {
  [key: string]: number;
}
class Anagram {
  constructor(private readonly str1: string, private readonly str2: string) {
    this.str1 = str1;
    this.str2 = str2;
  }

  is_valid(): boolean {
    if (this.str1.length !== this.str2.length) return false;
    let countT: CountObject = {},
      countS: CountObject = {};

    /** 1st solution */
    // const sorted_str1 = this.str1.split('').sort().join('')
    // const sorted_str2 = this.str2.split('').sort().join('')
    // if(sorted_str1 === sorted_str2) return true
    // else return false

    /** 2nd solution */
    for (let i = 0; i < this.str1.length; i++) {
      let str1Ch = this.str1[i];
      let str2Ch = this.str2[i];
      countS[str1Ch] = countS.hasOwnProperty(str1Ch) ? countS[str1Ch] + 1 : 1;
      countT[str2Ch] = countT.hasOwnProperty(str2Ch) ? countT[str2Ch] + 1 : 1;
    }
    for (let key in countS) {
      if (!countT.hasOwnProperty(key) || countT[key] !== countS[key]) {
        return false;
      }
    }
    return true;
  }
}

const anagramObj = new Anagram("aaarm", "raaaa");
console.log(anagramObj.is_valid());
