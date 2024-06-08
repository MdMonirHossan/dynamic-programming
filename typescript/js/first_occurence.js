"use strict";
class FirstOccurrence {
    constructor(haystacks, needle) {
        this.haystacks = haystacks;
        this.needle = needle;
        this.haystacks = haystacks;
        this.needle = needle;
    }
    firstOccurrence() {
        if (this.haystacks.length < this.needle.length)
            return -1;
        let newStr = "";
        let index = [];
        for (let i = 0; i < this.haystacks.length; i++) {
            index.push(i);
            newStr += this.haystacks[i];
            if (this.needle === newStr) {
                return index[0];
            }
            else if (this.needle.length === newStr.length) {
                index = [];
                newStr = "";
            }
        }
        return -1;
    }
}
const occurrenceObj = new FirstOccurrence("leetcode", "leeto");
console.log(occurrenceObj.firstOccurrence());
