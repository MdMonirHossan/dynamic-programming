"use strict";
class LongestPrefix {
    constructor(strs) {
        this.strs = strs;
        this.strs = strs;
    }
    prefix() {
        let result = "";
        for (let i = 0; i < this.strs[0].length; i++) {
            for (let s in this.strs) {
                if (i === this.strs[s].length || this.strs[s][i] !== this.strs[0][i]) {
                    return result;
                }
            }
            result += this.strs[0][i];
        }
        return result;
    }
}
const prefixObj = new LongestPrefix(["flower", "flow", "flight"]);
console.log(prefixObj.prefix());
