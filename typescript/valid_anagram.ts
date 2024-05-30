class Anagram {
  constructor(private readonly str1: string, private readonly str2: string) {
    this.str1 = str1;
    this.str2 = str2;
  }

  is_valid() {
    if (this.str1.length !== this.str2.length) return false;
    let countT = {},
      countS = {};

    /** 1st solution */
    // const sorted_str1 = this.str1.split('').sort().join('')
    // const sorted_str2 = this.str2.split('').sort().join('')
    // if(sorted_str1 === sorted_str2) return true
    // else return false

    /** 2nd solution */
    for (let i = 0; i < this.str1.length; i++) {
      let str1Ch = this.str1[i];
      let str2Ch = this.str2[i];
      countS[str1Ch] = countS.hasOwnProperty(str1Ch) ? countS[str1Ch] + 1 : 1;
      countT[str2Ch] = countT.hasOwnProperty(str2Ch) ? countT[str2Ch] + 1 : 1;
    }
    for (let key in countS) {
      if (!countT.hasOwnProperty(key) || countT[key] !== countS[key]) {
        return false;
      }
    }
    return true;
  }
}

const obj = new Anagram("aaarm", "raaaa");
console.log(obj.is_valid());
