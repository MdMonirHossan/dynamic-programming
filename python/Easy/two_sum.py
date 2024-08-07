'''
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.
'''
class TwoSum:
    def __init__(self, nums, target):
        self.nums = nums
        self.target = target

    def two_sum(self):
        for i in range(len(self.nums)):
            for j in range(i+1, len(self.nums)):
                if self.nums[j] == self.target - self.nums[i]:
                    return [i, j]


sumObj = TwoSum([4, 5, 6], 10)
print(sumObj.two_sum())
