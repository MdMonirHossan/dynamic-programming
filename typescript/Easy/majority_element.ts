/**
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
*/

class MajorityElement {
  constructor(private readonly nums: number[]) {
    this.nums = nums;
  }
   /**
     * Boyer-Moore Majority Vote Algorithm
     * Time Complexity O(n)
     * Space Complexity O(1)
     */
  majority() {
    let result: number = 0,
      count: number = 0;

      for(let n in this.nums){
        if(count === 0) result = this.nums[n]
        count += result === this.nums[n] ? 1:-1
      }

      let majorityCount = 0;
      for(let i of this.nums){
        if(i === result) majorityCount++;
      }
      return majorityCount > Math.floor(this.nums.length / 2) ? result : -1;
  }
}

const majorityObj = new MajorityElement([1,2,3,1,1,2])

console.log(majorityObj.majority())