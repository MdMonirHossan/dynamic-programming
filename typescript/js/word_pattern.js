"use strict";
var WordPattern = /** @class */ (function () {
    function WordPattern(pattern, str) {
        this.pattern = pattern;
        this.str = str;
        this.pattern = pattern;
        this.str = str;
    }
    WordPattern.prototype.is_match = function () {
        var splitStr = this.str.split(" ");
        var result = {};
        if (this.pattern.length !== splitStr.length)
            return false;
        for (var i = 0; i < this.pattern.length; i++) {
            if (!Object.keys(result).includes(this.pattern[i])) {
                if (Object.values(result).includes(splitStr[i])) {
                    return false;
                }
                result[this.pattern[i]] = splitStr[i];
                console.log(result);
            }
            else if (result[this.pattern[i]] !== splitStr[i]) {
                return false;
            }
        }
        return true;
    };
    return WordPattern;
}());
var patternObj = new WordPattern("abbb", "dog cat cat dog");
console.log(patternObj.is_match());
