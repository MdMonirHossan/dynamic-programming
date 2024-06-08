"use strict";
class Isomorphic {
    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
        this.str1 = str1;
        this.str2 = str2;
    }
    isIsomorphic() {
        if (this.str1.length !== this.str2.length)
            return false;
        let iso_hash = {};
        let is_isomorphic = false;
        for (let i = 0; i < this.str1.length; i++) {
            if (!Object.keys(iso_hash).some((key) => key === this.str1[i])) {
                if (Object.values(iso_hash).includes(this.str2.charAt(i)))
                    return false;
                iso_hash[this.str1[i]] = this.str2[i];
            }
            if (iso_hash[this.str1[i]] === this.str2.charAt(i)) {
                is_isomorphic = true;
            }
            else {
                is_isomorphic = false;
            }
        }
        console.log(iso_hash);
        return is_isomorphic;
    }
}
const isoObj = new Isomorphic("badc", "baba");
console.log(isoObj.isIsomorphic());
