class ValidParenthesis:

	def __init__(self, parenthesis):
		self.parenthesis = parenthesis


	def is_valid(self):
		stack = []
		is_valid = None

		if self.parenthesis =='':
			return False

		for p in self.parenthesis:
			if p in '({[':
				stack.append(p)
			elif p in ')}]':
				if len(stack) == 0:
					return False
				concat = stack.pop() + p
				# concat = left_parenthesis + p
				if concat in ['()', '{}', '[]']:
					is_valid = True
				else:
					return False
			else:
				return False

		if stack != []:
			return 

		return is_valid



if __name__ == '__main__':

	obj = ValidParenthesis('{([(())])}')

	print(obj.is_valid())