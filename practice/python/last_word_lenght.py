'''
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 
Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
'''

class LastWordLength:
    def __init__(self, str:str):
        self.str = str

    def solution(self):
        length = 0
        for i in range(len(self.str)-1, -1, -1):
            if self.str[i] != " ":
                length += 1
            if length > 0 and self.str[i] == " ":
                return length
        return length
        


last_word_length = LastWordLength('   fly me   to   the moon  ')
print(last_word_length.solution())