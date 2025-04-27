'''
	Given an integer array nums, return true if any value appears at least twice in the array, 
	and return false if every element is distinct.
	
	Example 1:
	Input: nums = [1,2,3,1]
	Output: true
	
	Example 2:
	Input: nums = [1,2,3,4]
	Output: false
	
	Example 3:
	Input: nums = [1,1,1,3,3,4,3,2,4,2]
	Output: true
'''
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
