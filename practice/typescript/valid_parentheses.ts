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
class ValidParentheses {
  constructor(private str: string) {
    this.str = str;
  }

  solution() {
    let is_valid: boolean = false;
    let stack: string[] = [];

    for (let s of this.str) {
      if ("({[".includes(s)) {
        stack.push(s);
      } else if (")}]".includes(s)) {
        if (stack.length === 0) return false;
        const formParentheses = stack.pop() + s;
        if (["()", "{}", "[]"].includes(formParentheses)) {
          is_valid = true;
        }
      }
    }
    if (stack.length !== 0) return false;
    return is_valid;
  }
}

const validParenthesesObj = new ValidParentheses("(){}[]");
console.log(validParenthesesObj.solution());
