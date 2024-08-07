class TwoSum {
  constructor(
    private readonly nums: number[],
    private readonly target: number
  ) {
    this.nums = nums;
    this.target = target;
  }

  twoSum() {
    for (let i = 0; i < this.nums.length; i++) {
      for (let j = i + 1; j < this.nums.length; j++) {
        if (this.nums[j] === this.target - this.nums[i]) return [i, j];
      }
    }
  }
}

const sumObj = new TwoSum([4, 5, 6], 10);
console.log(sumObj.twoSum());
