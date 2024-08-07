'''
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

## Example
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
'''
class RemoveElement:

    def __init__(self, nums, val):
        self.nums = nums
        self.val = val
    
    def elements(self):
        k = 0
        for i in range(len(self.nums)):
            if self.nums[i] != self.val:
                self.nums[k] = self.nums[i]
                k += 1
        print(self.nums)
        return k


elementsObj = RemoveElement([1,3,0,2,4,2,2], 2)
print(elementsObj.elements())