def majority_element(nums):
	res, count = 0, 0

	for n in nums:
		if count == 0:
			res = n
		count += (1 if res == n else -1)
	return res


	# count = {}
	# res, maxCount = 0, 0
	# for n in nums:
	# 	count[n] = 1 + count.get(n, 0)
	# 	res = n if count[n] > maxCount else res
	# 	maxCount = max(count[n], maxCount)
	# return res 


nums = [1, 2, 1, 1, 2, 1]

print(majority_element(nums))
