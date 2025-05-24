'''
169. Majority Element

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?
'''
class MajorityElements:
    def __init__(self, arr):
        self.arr = arr

    '''
     * Boyer-Moore Majority Vote Algorithm
     * Time Complexity O(n)
     * Space Complexity O(1)
    '''
    def solution(self):
        result, count = 0, 0
        for n in self.arr:
            if count == 0:
                result = n
            count += (1 if result == n else -1)
        return 1 if self.arr.count(result) > len(self.arr) // 2 else -1


majority_element_obj = MajorityElements([1, 2, 3, 1, 2, 1, 1])
print(majority_element_obj.solution())