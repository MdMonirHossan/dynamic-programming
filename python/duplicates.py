def duplicate(nums):

	hash_set = set()
	count = {}
	for n in nums:
		# count[n] = 1 + count.get(count[n], 0)
		# if count[n] > 1:
		# 	return True
		if n in hash_set:
			return True
		hash_set.add(n)
	return False


nums = [1,2,3,1]

print(duplicate(nums))
