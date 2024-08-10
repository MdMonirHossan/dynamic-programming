/**
  Given two strings s and t, determine if they are isomorphic.
  Two strings s and t are isomorphic if the characters in s can be replaced to get t.
  All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

  Example 1:
  Input: s = "egg", t = "add"
  Output: true
	
  Example 2:
  Input: s = "foo", t = "bar"
  Output: false
	
  Example 3:
  Input: s = "paper", t = "title"
  Output: true
*/
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
        if (Object.values(iso_hash).includes(this.str2.charAt(i))) return false
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

const isoObj = new Isomorphic("badc", "baba");
console.log(isoObj.isIsomorphic());
