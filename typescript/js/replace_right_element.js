"use strict";
class ReplaceRightElement {
    constructor(arr) {
        this.arr = arr;
        this.arr = arr;
    }
    replaceElement() {
        let rightMax = -1;
        for (let i = this.arr.length - 1; i >= 0; --i) {
            let newMax = Math.max(rightMax, this.arr[i]);
            this.arr[i] = rightMax;
            rightMax = newMax;
            return this.arr;
        }
    }
}
const replaceObj = new ReplaceRightElement([17, 18, 4, 6, 1]);
console.log(replaceObj.replaceElement());
