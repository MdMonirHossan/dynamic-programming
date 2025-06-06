'''
49. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
'''

from collections import defaultdict

class GroupAnagrams:
    def __init__(self, strings):
        self.strings = strings
    # O(m*n) time complexity
    def anagrams(self):
        result = defaultdict(list)
        
        for string in self.strings:
            count = [0] * 26  # 26 character [0,0,0,0,0,....]
            for c in string:
                count[ord(c) - ord('a')] += 1
            result[tuple(count)].append(string)
        return list(result.values())
        
    def anagrams_2(self):
        if len(self.strings) == 0:
            return self.strings
        elif len(self.strings) == 1 and self.strings[0] == "":
            return self.strings
        result = {}
        groups = []
        for string in self.strings:
            sort_str = ''.join(sorted(string))
            print(sort_str)
            if sort_str not in result:
                result[sort_str] = [tuple([sort_str, string])]
            else:
                result[sort_str].append(tuple([sort_str, string]))
        for key, value in result.items():
            anagrams = [item[1] for item in value]
            groups.append(anagrams)
        print(groups)

anagramsObj = GroupAnagrams(["act","pots","tops","cat","stop","hat"])
print(anagramsObj.anagrams_2())