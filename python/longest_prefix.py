'''
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
'''
class LongestPrefix:
    def __init__(self, strs):
        self.strs = strs

    def prefix(self):
        result = ''
        for i in range(len(self.strs[0])):
            for s in self.strs:
                if i == len(s) or s[i] != self.strs[0][i]:
                    return result
            result += self.strs[0][i]
        print(result)




prefixObj = LongestPrefix(["flower","flow","flight"])
print(prefixObj.prefix())