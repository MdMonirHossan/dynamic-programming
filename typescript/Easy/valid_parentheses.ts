/**
  20. Valid Parentheses

  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.

  Example 1:
  Input: s = "()"
  Output: true

  Example 2:
  Input: s = "()[]{}"
  Output: true

  Example 3:
  Input: s = "(]"
  Output: false

  Example 4:
  Input: s = "([])"
  Output: true

  Constraints:
  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
*/
class Parenthesis {
  constructor(private readonly parentheses: string) {
    this.parentheses = parentheses;
  }

  is_valid() {
    if (this.parentheses === "") return false;
    let stack: string[] = [];
    let is_valid: boolean = false;
    for (let p of this.parentheses) {
      if ("({[".includes(p)) {
        stack.push(p);
      } else if (")}]".includes(p)) {
        if (stack.length === 0) return false;
        const concat: string = stack.pop() + p;
        if (["()", "{}", "[]"].includes(concat)) is_valid = true;
        else return false;
      } else return false;
    }
    if (stack.length !== 0) {
      return false;
    }
    return is_valid;
  }
}

const parenthesesObj = new Parenthesis("{{(({[]}))}}");

console.log(parenthesesObj.is_valid());
