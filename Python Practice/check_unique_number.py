def unique_number(num):
	if len(num) == len(set(num)):
		print(f'The list {num} is unique..')
	else:
		print(f'The list {num} is not unique')


unique_number([3,5,6,1])

unique_number([2,4,3,2])


lst = [2, 4, 4, 56, 8, 9]
lst2 = [4,5,6,7,2]

new_list = [i for i in lst if i % 2 == 0]

merged_list = [i for i in zip(lst, lst2)]

for i in merged_list:
	a, b = i
	print(a, b)

print(new_list)

print(merged_list)

string = 'Hello World'
print(string[::-2])


def lower_case(func):
	def wrapper():
		function = func()
		str_lower = function.lower()
		return str_lower
	return wrapper

@lower_case
def string_lower():
	return 'Hello World'

print(string_lower())

two_dimension = [[2,3,6], [4,6,7], [2,5,2]]

for i in two_dimension:
	print(i)
