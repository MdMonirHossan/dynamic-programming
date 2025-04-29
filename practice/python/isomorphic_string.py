'''
	Given two strings s and t, determine if they are isomorphic.
	Two strings s and t are isomorphic if the characters in s can be replaced to get t.
	All occurrences of a character must be replaced with another character while preserving the order of characters. 
	No two characters may map to the same character, but a character may map to itself.

	Example 1:
	Input: s = "egg", t = "add"
	Output: true
	
	Example 2:
	Input: s = "foo", t = "bar"
	Output: false
	
	Example 3:
	Input: s = "paper", t = "title"
	Output: true
'''

class IsIsomorphicString:
    def __init__(self, s:str, t:str):
        self.s = s
        self.t = t
    
    def solution(self):
        hash_map = {}
        if len(self.s) != len(self.t):
            return False
        for i in range(len(self.s)):
            if self.s[i] not in hash_map:
                if self.t[i] in hash_map.values():
                    return False 
                hash_map[self.s[i]] = self.t[i]
            else:
                if hash_map[self.s[i]] != self.t[i]:
                    return False
        return True
        

is_isomorphic_str_obj = IsIsomorphicString('cadacada', 'pjtjpjtj')
print(is_isomorphic_str_obj.solution())