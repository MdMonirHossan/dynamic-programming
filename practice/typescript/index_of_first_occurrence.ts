/*
	Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
    or -1 if needle is not part of haystack.

	Example 1:
	Input: haystack = "sadbutsad", needle = "sad"
	Output: 0
	Explanation: "sad" occurs at index 0 and 6.
	The first occurrence is at index 0, so we return 0.
	
	Example 2:
	Input: haystack = "leetcode", needle = "leeto"
	Output: -1
	Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

class IndexFirstOccurrence {
  constructor(private haystack: string, private needle: string) {
    this.haystack = haystack;
    this.needle = needle;
  }

  solution() {
    const n = this.needle.length,
      m = this.haystack.length;
    for (let i = 0; i <= m - n; i++) {
      let isEqual = true;
      for (let j = 0; j <= n; j++) {
        if (this.haystack[i + j] !== this.needle[j]) {
          isEqual = false;
          break;
        }
      }
      if (isEqual) {
        return i;
      }
    }
    return -1;
  }
}

const indexFirstOccurrenceObj = new IndexFirstOccurrence("sdbutsad", "sad");
console.log(indexFirstOccurrenceObj.solution());
