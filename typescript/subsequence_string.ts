class SubsequenceString {
  constructor(private readonly s: string, private readonly t: string) {
    this.s = s;
    this.t = t;
  }

  isSubsequence() {
    let i: number = 0,
      j: number = 0;

    while (i < this.s.length && j < this.t.length) {
      console.log(i, j);
      if (this.s[i] === this.t[j]) {
        i += 1;
      }
      j += 1;
    }
    return i === this.s.length ? true : false;
  }
}

const subsequenceObj = new SubsequenceString("aaaaaa", "bbaaaa");
console.log(subsequenceObj.isSubsequence());
