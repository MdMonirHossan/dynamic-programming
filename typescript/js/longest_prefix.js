"use strict";
class LongestPrefix {
    constructor(strs) {
        this.strs = strs;
        this.strs = strs;
    }
    prefix() {
        let result = '';
        for (let i = 0; i < this.strs[0].length; i++) {
            for (let s in this.strs) {
                console.log('-----', this.strs[s]);
                if (i === this.strs[s].length || this.strs[s][i] !== this.strs[0][i]) {
                    return result;
                }
            }
            result += this.strs[0][i];
        }
        console.log('=====', result);
        return result;
    }
}
const prefixObj = new LongestPrefix(["flower", "flow", "flight"]);
console.log(prefixObj.prefix());
