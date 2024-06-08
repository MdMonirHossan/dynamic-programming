"use strict";
class Duplicate {
    constructor(arr) {
        this.arr = arr;
        this.arr = arr;
    }
    duplicate() {
        let hashSet = new Set();
        for (let i = 0; i < this.arr.length; i++) {
            if (hashSet.has(this.arr[i])) {
                return true;
            }
            hashSet.add(this.arr[i]);
        }
        console.log("--", hashSet);
        return false;
    }
}
const duplicateObj = new Duplicate([1, 2, 3]);
console.log(duplicateObj.duplicate());
