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
class Isomorphic:

	def __init__(self, str1, str2):
		self.str1 = str1
		self.str2 = str2

	def is_isomorphic(self):

		if len(self.str1) != len(self.str2):
			return False

		is_iso = False
		isophormic_chacter = {}

		# isophormic_chacter = dict(zip(self.str1, self.str2))
		# print(isophormic_chacter)

		for indx, value in enumerate(self.str1):

			if value not in isophormic_chacter:
				if self.str2[indx] in isophormic_chacter.values():
					return False
				isophormic_chacter[value] = self.str2[indx]
			print(isophormic_chacter)

			if isophormic_chacter[value] == self.str2[indx]:
				is_iso = True
			else:
				return False
		return is_iso


if __name__ == '__main__':

	obj = Isomorphic('abacd', 'title')

	print(obj.is_isomorphic())