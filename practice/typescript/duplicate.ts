/*
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
*/

class Duplicate {
  constructor(private nums: number[]) {
    this.nums = nums;
  }

  solution(): boolean {
    let hashSet = new Set();
    // for (let i = 0; i < this.nums.length; i++) {
    //   if (hashSet.has(this.nums[i])) {
    //     return true;
    //   }
    //   hashSet.add(this.nums[i]);
    // }
    for(let i of this.nums){
        console.log(i)
        if(hashSet.has(i)){
            return true;
        }
        hashSet.add(i)
    }
    return false;
  }
}

const duplicateObj = new Duplicate([2, 4, 5, 2]);
console.log(duplicateObj.solution());
