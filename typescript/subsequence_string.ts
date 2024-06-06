class SubsequenceString {
  constructor(private readonly s: string, private readonly t: string) {
    this.s = s;
    this.t = t;
  }

  isSubsequence() {
    let i: number = 0,
      j: number = 0;

    while (i < this.s.length && j < this.t.length) {
      if (this.s[i] === this.t[j]) i += 1;
      else j += 1;
    }
    return i === this.s.length ? true : false;
  }
}

const subsequenceObj = new SubsequenceString("abc", "aghbero");
console.log(subsequenceObj.isSubsequence());
