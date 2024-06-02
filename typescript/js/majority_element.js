"use strict";
var MajorityElement = /** @class */ (function () {
    function MajorityElement(nums) {
        this.nums = nums;
        this.nums = nums;
    }
    MajorityElement.prototype.majority = function () {
        var result = 0, count = 0;
        for (var n in this.nums) {
            if (count === 0)
                result = this.nums[n];
            count += result === this.nums[n] ? 1 : -1;
        }
        return result;
    };
    return MajorityElement;
}());
var majorityObj = new MajorityElement([1, 2, 3, 1, 1, 2]);
console.log(majorityObj.majority());
