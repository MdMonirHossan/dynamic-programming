"use strict";
var ReplaceRightElement = /** @class */ (function () {
    function ReplaceRightElement(arr) {
        this.arr = arr;
        this.arr = arr;
    }
    ReplaceRightElement.prototype.replaceElement = function () {
        var rightMax = -1;
        for (var i = this.arr.length - 1; i >= 0; --i) {
            var newMax = Math.max(rightMax, this.arr[i]);
            this.arr[i] = rightMax;
            rightMax = newMax;
            return this.arr;
        }
    };
    return ReplaceRightElement;
}());
var replaceObj = new ReplaceRightElement([17, 18, 4, 6, 1]);
console.log(replaceObj.replaceElement());
