def second_greater(nums):
	second_greater = 0
	count = 0
	if len(nums) < 3:
		for i in range(len(nums)):
			nums[i] = -1
		return nums
	for i in range(len(nums) - 2):
		for j in range(i+1, len(nums)):
			if count < 2:
				if nums[j] > nums[i]:
					second_greater = nums[j]
					count += 1
			if count == 2:
				break
		nums[i] = second_greater
		second_greater = 0
		count = 0
	nums[-1] = -1
	nums[-2] = -1
	return nums


print(second_greater([2,4,0,9,6]))

print(second_greater([3, 4, 5, 0, 8, 9]))

print(second_greater([3,3]))

