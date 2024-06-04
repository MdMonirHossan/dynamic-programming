"use strict";
var GroupAnagrams = /** @class */ (function () {
    function GroupAnagrams(strings) {
        this.strings = strings;
        this.strings = strings;
    }
    GroupAnagrams.prototype.anagrams = function () {
        var result = {};
        for (var i in this.strings) {
            var count = Array(26).fill(0);
            for (var j in this.strings[i].split("")) {
                count[this.strings[i].charCodeAt(j) - "a".charCodeAt(0)] += 1;
            }
            result[String(count)] = result[String(count)] || [];
            result[String(count)].push(this.strings[i]);
        }
        return Object.keys(result).map(function (key) { return result[key]; });
    };
    return GroupAnagrams;
}());
var groupObj = new GroupAnagrams([
    "act",
    "pots",
    "tops",
    "cat",
    "stop",
    "hat",
]);
console.log(groupObj.anagrams());
