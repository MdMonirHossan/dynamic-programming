var Isomorphic = /** @class */ (function () {
    function Isomorphic(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
        this.str1 = str1;
        this.str2 = str2;
    }
    Isomorphic.prototype.isIsomorphic = function () {
        var _this = this;
        if (this.str1.length !== this.str2.length)
            return false;
        var iso_hash = {};
        var is_isomorphic = false;
        var _loop_1 = function (i) {
            if (!Object.keys(iso_hash).some(function (key) { return key === _this.str1[i]; })) {
                iso_hash[this_1.str1[i]] = this_1.str2[i];
            }
            if (iso_hash[this_1.str1[i]] === this_1.str2.charAt(i)) {
                is_isomorphic = true;
            }
            else {
                is_isomorphic = false;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.str1.length; i++) {
            _loop_1(i);
        }
        console.log(iso_hash);
        return is_isomorphic;
    };
    return Isomorphic;
}());
var obj = new Isomorphic("foo", "bar");
console.log(obj.isIsomorphic());
