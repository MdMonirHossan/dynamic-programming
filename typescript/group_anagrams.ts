interface ResultObject {
  [key: string]: string[];
}
class GroupAnagrams {
  constructor(private readonly strings: string[]) {
    this.strings = strings;
  }

  anagrams() {
    let result: ResultObject = {};
    for (let i in this.strings) {
      let count: number[] = Array(26).fill(0);
      for (let j in this.strings[i].split("")) {
        count[this.strings[i].charCodeAt(j) - "a".charCodeAt(0)] += 1;
      }
      result[String(count)] = result[String(count)] || [];
      result[String(count)].push(this.strings[i]);
    }
    return Object.keys(result).map(key => result[key])
  }
}

const groupObj = new GroupAnagrams([
  "act",
  "pots",
  "tops",
  "cat",
  "stop",
  "hat",
]);
console.log(groupObj.anagrams());
