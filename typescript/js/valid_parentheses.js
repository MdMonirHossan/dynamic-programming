"use strict";
var Parenthesis = /** @class */ (function () {
    function Parenthesis(parentheses) {
        this.parentheses = parentheses;
        this.parentheses = parentheses;
    }
    Parenthesis.prototype.is_valid = function () {
        if (this.parentheses === "")
            return false;
        var stack = [];
        var is_valid = false;
        for (var i = 0; i < this.parentheses.length; i++) {
            if ("({[".includes(this.parentheses[i])) {
                stack.push(this.parentheses[i]);
            }
            else if (")}]".includes(this.parentheses[i])) {
                if (stack.length == 0)
                    return false;
                var concat = stack.pop() + this.parentheses[i];
                if (["()", "{}", "[]"].includes(concat))
                    is_valid = true;
                else
                    return false;
            }
            else {
                return false;
            }
        }
        if (stack.length !== 0) {
            return false;
        }
        return is_valid;
    };
    return Parenthesis;
}());
var parenthesesObj = new Parenthesis("{{(({[]}))})");
console.log(parenthesesObj.is_valid());
