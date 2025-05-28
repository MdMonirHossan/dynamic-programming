/**
1189. Maximum Number of Balloons
  Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
  You can use each character in text at most once. Return the maximum number of instances that can be formed.

    Example 1:
    Input: text = "nlaebolko"
    Output: 1

    Example 2:
    Input: text = "loonbalxballpoon"
    Output: 2

    Example 3:
    Input: text = "leetcode"
    Output: 0
 
Constraints:
1 <= text.length <= 104
text consists of lower case English letters only. 
*/

interface CharacterObject {
  [key: string]: number;
}

class MaxNumberOfBalloon {
  constructor(private text: string) {
    this.text = text;
  }

  solution() {
    const chCount: CharacterObject = {};
    for (let ch of this.text) {
      if (ch in chCount) {
        chCount[ch] += 1;
      } else {
        chCount[ch] = 1;
      }
    }
    chCount['l'] = Math.floor(chCount['l'] / 2);
    chCount['o'] = Math.floor(chCount['o'] / 2);
    let result: number = 0;
    for(let i of 'balon'){
        result = Math.min(chCount[i]) || 0;
    }
    return result;
  }

  solution2(){
    const chCount:Record<string, number> = {};
    for(let ch of this.text){
        chCount[ch] = (chCount[ch] ?? 0) + 1;
    }
    chCount['l'] = Math.floor(chCount['l'] ?? 0 / 2);
    chCount['o'] = Math.floor(chCount['o'] ?? 0 / 2);
    const requiredCh = ['b', 'a', 'l', 'o', 'n'];
    return Math.min(...requiredCh.map(c => chCount[c] || 0 ));
  }
}

const maxNumberBalloonObj = new MaxNumberOfBalloon("loonbalxballpoon");
console.log(maxNumberBalloonObj.solution2());
