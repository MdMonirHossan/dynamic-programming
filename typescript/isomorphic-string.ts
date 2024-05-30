class Isomorphic {
  constructor(private readonly str1: string, private readonly str2: string) {
    this.str1 = str1;
    this.str2 = str2;
  }

  isIsomorphic() {
    if (this.str1.length !== this.str2.length) return false;

    let iso_hash: Record<string, any> = {};
    let is_isomorphic: boolean = false;

    for (let i = 0; i < this.str1.length; i++) {
      if (!Object.keys(iso_hash).some((key) => key === this.str1[i])) {
        iso_hash[this.str1[i]] = this.str2[i];
      }

      if (iso_hash[this.str1[i]] === this.str2.charAt(i)) {
        is_isomorphic = true;
      } else {
        is_isomorphic = false;
      }
    }
    console.log(iso_hash);
    return is_isomorphic;
  }
}

const isoObj = new Isomorphic("foo", "bar");
console.log(isoObj.isIsomorphic());
