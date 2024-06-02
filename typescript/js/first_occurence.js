"use strict";
var FirstOccurrence = /** @class */ (function () {
    function FirstOccurrence(haystacks, needle) {
        this.haystacks = haystacks;
        this.needle = needle;
        this.haystacks = haystacks;
        this.needle = needle;
    }
    FirstOccurrence.prototype.firstOccurrence = function () {
        if (this.haystacks.length < this.needle.length)
            return -1;
        var newStr = "";
        var index = [];
        for (var i = 0; i < this.haystacks.length; i++) {
            index.push(i);
            newStr += this.haystacks[i];
            console.log(this.haystacks[i], "--", newStr, index);
            if (this.needle === newStr) {
                console.log("===== ", index[0]);
                return index[0];
            }
            else if (this.needle.length === newStr.length) {
                index = [];
                newStr = "";
            }
        }
        return -1;
    };
    return FirstOccurrence;
}());
var occurrenceObj = new FirstOccurrence("leetcode", "leeto");
console.log(occurrenceObj.firstOccurrence());
