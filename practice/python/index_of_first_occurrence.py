'''
	Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
    or -1 if needle is not part of haystack.

	Example 1:
	Input: haystack = "sadbutsad", needle = "sad"
	Output: 0
	Explanation: "sad" occurs at index 0 and 6.
	The first occurrence is at index 0, so we return 0.
	
	Example 2:
	Input: haystack = "leetcode", needle = "leeto"
	Output: -1
	Explanation: "leeto" did not occur in "leetcode", so we return -1.
'''

class IndexFirstOccurrence:
    def __init__(self, haystack, needle):
        self.haystack = haystack
        self.needle = needle

    def solution(self):
        n, m = len(self.haystack), len(self.needle)
        for i in range(n - m + 1):
            if self.haystack[i : i + m] == self.needle:
                return i
        return -1


index_first_occurrence_obj = IndexFirstOccurrence("butsad", "sad")
print(index_first_occurrence_obj.solution())