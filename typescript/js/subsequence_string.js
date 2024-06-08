"use strict";
var SubsequenceString = /** @class */ (function () {
    function SubsequenceString(s, t) {
        this.s = s;
        this.t = t;
        this.s = s;
        this.t = t;
    }
    SubsequenceString.prototype.isSubsequence = function () {
        var i = 0, j = 0;
        while (i < this.s.length && j < this.t.length) {
            console.log(i, j);
            if (this.s[i] === this.t[j]) {
                i += 1;
            }
            j += 1;
        }
        return i === this.s.length ? true : false;
    };
    return SubsequenceString;
}());
var subsequenceObj = new SubsequenceString("aaaaaa", "bbaaaa");
console.log(subsequenceObj.isSubsequence());
