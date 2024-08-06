/**
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
*/
class NextGreaterElement {
  constructor(
    private readonly num1: number[],
    private readonly num2: number[]
  ) {
    this.num1 = num1;
    this.num2 = num2;
  }

  solution() {
    let num1Hash: { [key: string]: number } = {};
    for (let i = 0; i < this.num1.length; i++) num1Hash[this.num1[i]] = i;
    let result: number[] = Array(this.num1.length).fill(-1);

    for (let i = 0; i < this.num2.length; i++) {
      if (!(this.num2[i] in num1Hash)) {
        continue;
      }
      for (let j = i + 1; j < this.num2.length; j++) {
        console.log("==== ", this.num2[i]);
        if (this.num2[j] > this.num2[i]) {
          const index: number = num1Hash[this.num2[i]];
          result[index] = this.num2[j];
          break;
        }
      }
    }
    return result;
  }

  solution2() {
    const num1Hash: { [key: string]: number } = {};
    for (let i = 0; i < this.num1.length; i++) num1Hash[this.num1[i]] = i;
    let result: number[] = Array(this.num1.length).fill(-1);
    let stack: number[] = [];
    for (let i = 0; i < this.num2.length; i++) {
      let curr: number = this.num2[i];
      while (stack && curr > stack[stack.length - 1]) {
        let val: number = stack.pop() as number;
        const index = num1Hash[val];
        result[index] = curr;
      }
      if (this.num2[i] in num1Hash) {
        stack.push(this.num2[i]);
      }
      console.log(stack);
    }
    return result;
  }
}

const nextGreaterElementObj = new NextGreaterElement(
  [1, 3, 5, 2, 4],
  [6, 5, 4, 3, 2, 1, 7]
);
console.log(nextGreaterElementObj.solution2());
