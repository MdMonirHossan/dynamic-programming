class MajorityElement {
  constructor(private readonly nums: number[]) {
    this.nums = nums;
  }

  majority() {
    let result: number = 0,
      count: number = 0;

      for(let n in this.nums){
        if(count === 0) result = this.nums[n]
        count += result === this.nums[n] ? 1:-1
      }
      return result
  }
}

const majorityObj = new MajorityElement([1,2,3,1,1,2])

console.log(majorityObj.majority())