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
    '''
        ✅ Time Complexity:
        For each word:
        Count loop → O(k)
        Convert array to string → O(26) → O(1), since alphabet size is constant
        So per word = O(k)
        If there are n words:
        ➡️ Total: O(n * k)
    '''
    def solution(self):
        result = defaultdict(list)
        for string in self.strings:
            count = [0] * 26
            for c in string:
                count[ord(c) - ord('a')] += 1
            result[tuple(count)].append(string)
        return list(result.values())

group_anagrams_obj = GroupAnagrams(['cat', 'atc', 'bat', 'tab'])
print(group_anagrams_obj.solution())