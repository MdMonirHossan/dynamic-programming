class Parenthesis {
  constructor(private readonly parentheses: string) {
    this.parentheses = parentheses;
  }

  is_valid() {
    if (this.parentheses === "") return false;
    let stack: string[] = [];
    let is_valid: boolean = false;
    for (let i = 0; i < this.parentheses.length; i++) {
      if ("({[".includes(this.parentheses[i])) {
        stack.push(this.parentheses[i]);
      } else if (")}]".includes(this.parentheses[i])) {
        if (stack.length == 0) return false;
        const concat = stack.pop() + this.parentheses[i];
        if (["()", "{}", "[]"].includes(concat)) is_valid = true;
        else return false;
      } else {
        return false;
      }
    }
    if (stack.length !== 0) {
      return false;
    }
    return is_valid;
  }
}

const obj = new Parenthesis("{{(({[]}))})");

console.log(obj.is_valid());
