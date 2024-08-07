class Isophormic:

	def __init__(self, str1, str2):
		self.str1 = str1
		self.str2 = str2

	def is_isophormic(self):

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

	obj = Isophormic('abacd', 'title')

	print(obj.is_isophormic())