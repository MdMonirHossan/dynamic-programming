"use strict";
var Duplicate = /** @class */ (function () {
    function Duplicate(arr) {
        this.arr = arr;
        this.arr = arr;
    }
    Duplicate.prototype.duplicate = function () {
        var hashSet = new Set();
        for (var i = 0; i < this.arr.length; i++) {
            if (hashSet.has(this.arr[i])) {
                return true;
            }
            hashSet.add(this.arr[i]);
        }
        console.log("--", hashSet);
        return false;
    };
    return Duplicate;
}());
var duplicateObj = new Duplicate([1, 2, 3]);
console.log(duplicateObj.duplicate());
