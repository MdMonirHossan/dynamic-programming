/**
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
 */
class MaxNumberOfBalloon {
  constructor(private readonly text: string) {
    this.text = text;
  }

  solution() {
    let textHash: { [key: string]: number } = {};
    let balloonHash: { [key: string]: number } = {};
    for (const t of this.text) textHash[t] = 1 + (textHash[t] || 0);
    for (const b of "balloon") balloonHash[b] = 1 + (balloonHash[b] || 0);
    let result: number = this.text.length;
    for (const i in balloonHash) {
      result = Math.floor(Math.min(result, textHash[i] / balloonHash[i])) || 0;
    }
    return result;
  }
}

const maxBalloonObj = new MaxNumberOfBalloon("balon");
console.log(maxBalloonObj.solution());
