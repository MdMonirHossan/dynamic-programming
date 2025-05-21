/*
49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/
interface ResultObject {
  [key: string]: string[];
}
class GroupAnagrams {
  constructor(private readonly strings: string[]) {
    this.strings = strings;
  }
  /**
   * ✅ Time Complexity:
    For each word:
    Count loop → O(k)
    Convert array to string → O(26) → O(1), since alphabet size is constant
    So per word = O(k)
    If there are n words:
    ➡️ Total: O(n * k)
   */
  anagrams() {
    let result: ResultObject = {};
    for (let i in this.strings) {
      let count: number[] = Array(26).fill(0);
      for (let j in this.strings[i].split("")) {
        count[this.strings[i].charCodeAt(Number(j)) - "a".charCodeAt(0)] += 1;
      }
      result[String(count)] = result[String(count)] || [];
      result[String(count)].push(this.strings[i]);
    }
    return Object.keys(result).map((key) => result[key]);
  }
}

const groupObj = new GroupAnagrams([
  "act",
  "pots",
  "tops",
  "cat",
  "stop",
  "hat",
]);
console.log(groupObj.anagrams());
