"use strict";
class MajorityElement {
    constructor(nums) {
        this.nums = nums;
        this.nums = nums;
    }
    majority() {
        let result = 0, count = 0;
        for (let n in this.nums) {
            if (count === 0)
                result = this.nums[n];
            count += result === this.nums[n] ? 1 : -1;
        }
        return result;
    }
}
const majorityObj = new MajorityElement([1, 2, 3, 1, 1, 2]);
console.log(majorityObj.majority());
