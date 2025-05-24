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

class MajorityElements{
    constructor(private arr:number[]){
        this.arr = arr;
    }
    /**
     * Boyer-Moore Majority Vote Algorithm
     * Time Complexity O(n)
     * Space Complexity O(1)
     */
    solution(){
        let count = 0,
            result = 0;
        for(let n of this.arr){
            if(count === 0){
                result = n;
            }
            count += result == n ? 1 : -1;
        }

        /** Consuming more time and space (time O(n) for filter and Space O(n) */
        // if (this.arr.filter(e => result === e).length < Math.floor(this.arr.length / 2)){
        //     return -1
        // }
        // return result;

        let majorityCount = 0;
        for(let i of this.arr){
            if(i === result) majorityCount++;
        }
        return majorityCount > Math.floor(this.arr.length / 2) ? result : -1;
    }
}

const majorityElementsObj = new MajorityElements([1, 1, 2, 3, 2, 1, 1]);
console.log(majorityElementsObj.solution());