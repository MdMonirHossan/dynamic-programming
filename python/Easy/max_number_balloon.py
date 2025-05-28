'''
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
'''
from collections import Counter
class MaxNumberOfBalloon:
    def __init__(self, text):
        self.text = text

    def solution(self):
        text_hash, balloon_hash = {}, {}
        # for t in self.text:
        #     text_hash[t] = 1 + text_hash.get(t, 0)
        # for b in 'balloon':
        #     balloon_hash[b] = 1 + balloon_hash.get(b, 0)
        text_hash = {t: self.text.count(t) for t in set(self.text)}
        print(text_hash)
        balloon_hash = {b: 'balloon'.count(b) for b in set('balloon')}
        result = len(self.text)
        for c in balloon_hash:
            result = min(result, text_hash.get(c, 0) // balloon_hash[c])
        return result
    
    def solution_2(self):
        text_hash = Counter(self.text)
        balloon_hash = Counter('balloon')
        result = len(self.text)
        for c in balloon_hash:
            # print(text_hash[c], balloon_hash[c])
            result = min(result, text_hash[c] // balloon_hash[c])
        return result


max_number_balloon_obj = MaxNumberOfBalloon("loonbalxallbpoon")
print(max_number_balloon_obj.solution())