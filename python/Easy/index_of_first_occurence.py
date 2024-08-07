def first_occurance(haystaks, needle):
	if needle not in haystaks:
		return -1
	first_index = 0
	if needle in haystaks:
		for index_i, value_i in enumerate(haystaks):
			for index , value in enumerate(needle):
				if value_i == value:
					return index_i



print(first_occurance('sadbutsad', 'sad'))
print(first_occurance('leetcode', 'leeto'))