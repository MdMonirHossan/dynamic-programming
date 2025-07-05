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
class IsValidAnagram {
  constructor(private s: string, private t: string) {
    this.s = s;
    this.t = t;
  }

  solution() {
    let chCount1: Record<string, number> = {};
    let chCount2: Record<string, number> = {};

    if (this.s.length !== this.t.length) return false;

    for (let i = 0; i < this.s.length; i++) {
      chCount1[this.s[i]] = Object.keys(chCount1).includes(this.s[i])
        ? (chCount1[this.s[i]] += 1)
        : 1;
      chCount2[this.t[i]] = Object.keys(chCount2).includes(this.t[i])
        ? (chCount2[this.t[i]] += 1)
        : 1;
    }
    for (const key in chCount1) {
      if (
        !Object.keys(chCount2).includes(key) ||
        chCount2[key] !== chCount1[key]
      ) {
        return false;
      }
    }

    return true;
  }
}

const isValidAnagramObj = new IsValidAnagram("rat", "tar");
console.log(isValidAnagramObj.solution());
