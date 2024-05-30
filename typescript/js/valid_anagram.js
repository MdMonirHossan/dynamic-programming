"use strict";
var Anagram = /** @class */ (function () {
    function Anagram(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
        this.str1 = str1;
        this.str2 = str2;
    }
    Anagram.prototype.is_valid = function () {
        if (this.str1.length !== this.str2.length)
            return false;
        var countT = {}, countS = {};
        /** 1st solution */
        // const sorted_str1 = this.str1.split('').sort().join('')
        // const sorted_str2 = this.str2.split('').sort().join('')
        // if(sorted_str1 === sorted_str2) return true
        // else return false
        /** 2nd solution */
        for (var i = 0; i < this.str1.length; i++) {
            var str1Ch = this.str1[i];
            var str2Ch = this.str2[i];
            countS[str1Ch] = countS.hasOwnProperty(str1Ch) ? countS[str1Ch] + 1 : 1;
            countT[str2Ch] = countT.hasOwnProperty(str2Ch) ? countT[str2Ch] + 1 : 1;
        }
        for (var key in countS) {
            if (!countT.hasOwnProperty(key) || countT[key] !== countS[key]) {
                return false;
            }
        }
        return true;
    };
    return Anagram;
}());
var anagramObj = new Anagram("aaarm", "raaaa");
console.log(anagramObj.is_valid());
