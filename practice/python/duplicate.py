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
class Duplicate:
    def __init__(self, nums):
        self.nums = nums
    

    def solution(self):
        hash_set = set()
        for n in self.nums:
            if n in hash_set:
                return True
            hash_set.add(n)
        return False

duplicate_obj = Duplicate([2, 0, 8])
print(duplicate_obj.solution())