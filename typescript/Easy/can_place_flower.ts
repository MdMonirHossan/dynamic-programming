/**
    You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, 
    and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

    Example 1:
    Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true

    Example 2:
    Input: flowerbed = [1,0,0,0,1], n = 2
    Output: false
 */

class CanPlaceFlower {
  constructor(private flowerBed: number[], private num: number) {
    this.flowerBed = flowerBed;
    this.num = num;
  }

  solution() {
    this.flowerBed = [0, ...this.flowerBed, 0]; // Adding 0's to the 1st & last index of flower bed
    
    for (let i = 1; i < this.flowerBed.length - 1; i++) {  // ignore first and last index
      if (
        this.flowerBed[i - 1] === 0 &&
        this.flowerBed[i] === 0 &&
        this.flowerBed[i + 1] === 0
      ) {
        this.flowerBed[i] = 1;
        this.num -= 1;
      }
    }
    return this.num <= 0;
  }
}

const canPlaceFlowerObj = new CanPlaceFlower([0, 0, 0, 1], 1);
console.log(canPlaceFlowerObj.solution());
