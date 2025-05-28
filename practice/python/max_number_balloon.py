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
    def __init__(self, string):
        self.string = string
    
    # Time Complexity O(n)
    # Space Complexity O(n)
    def solution(self):
        character_count = Counter(self.string)  # {'l': 4, 'o': 4, 'n': 2, 'b': 2, 'a': 2, 'x': 1, 'p': 1}
        character_count['l'] //= 2
        character_count['o'] //= 2
        # Return the minimum count among the letters in the word "balloon"
        result = min(character_count[c] for c in 'balon')
        return result


max_number_balloon_obj = MaxNumberOfBalloon('loonbalxallbpoon')
print(max_number_balloon_obj.solution())