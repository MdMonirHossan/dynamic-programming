'''
    The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
    You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
    For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

    Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

    Example 1:
    Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
    Output: [-1,3,-1]
    Explanation: The next greater element for each value of nums1 is as follows:
    - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
    - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
    - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
    
    Example 2:
    Input: nums1 = [2,4], nums2 = [1,2,3,4]
    Output: [3,-1]
    Explanation: The next greater element for each value of nums1 is as follows:
    - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
    - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
'''
class NextGreaterElement:
    def __init__(self, num1, num2):
        self.num1 = num1
        self.num2 = num2
    
    # O(n*m)
    def solution(self):
        num1_hash = {n:i for i, n in enumerate(self.num1)}
        result = [-1] * len(self.num1)
        for i in range(len(self.num2)):
            if self.num2[i] not in num1_hash:
                continue
            for j in range(i+1, len(self.num2)):
                if self.num2[j] > self.num2[i]:
                    index = num1_hash[self.num2[i]]
                    result[index] = self.num2[j]
                    break
        return result

    # O(n+m)
    def solution_2(self):
        num1_hash = {n:i for i, n in enumerate(self.num1)}
        result = [-1] * len(self.num1)
        stack = []

        for i in range(len(self.num2)):
            curr = self.num2[i]
            while stack and curr > stack[-1]:
                val = stack.pop()
                index = num1_hash[val]
                result[index] = curr
            if self.num2[i] in num1_hash:
                stack.append(self.num2[i])

        return result
                       

next_greater_element_obj = NextGreaterElement([1, 3, 5, 2, 4],[6, 5, 4, 3, 2, 1, 7])
print(next_greater_element_obj.solution_2())