/**
  Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

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
class FirstOccurrence {
  constructor(
    private readonly haystacks: string,
    private readonly needle: string
  ) {
    this.haystacks = haystacks;
    this.needle = needle;
  }

  firstOccurrence() {
    if (this.haystacks.length < this.needle.length) return -1;
    let newStr = "";
    let index: number[] = [];
    for (let i = 0; i < this.haystacks.length; i++) {
      index.push(i);
      newStr += this.haystacks[i];
      if (this.needle === newStr) {
        return index[0];
      } else if (this.needle.length === newStr.length) {
        index = [];
        newStr = "";
      }
    }
    return -1;
  }
}

const occurrenceObj = new FirstOccurrence("leetcode", "leeto");

console.log(occurrenceObj.firstOccurrence());
