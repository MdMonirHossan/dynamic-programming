/**
  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
	
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
  constructor(private readonly arr: number[]) {
    this.arr = arr;
  }

  duplicate() {
    let hashSet = new Set();

    for (let i = 0; i < this.arr.length; i++) {
      if (hashSet.has(this.arr[i])) {
        return true;
      }
      hashSet.add(this.arr[i]);
    }
    console.log("--", hashSet);
    return false;
  }
}

const duplicateObj = new Duplicate([1, 2, 3]);
console.log(duplicateObj.duplicate());
