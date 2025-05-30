/*
You have a long flowerbed in which some of the plots are planted, and some are not. 
However, flowers cannot be planted in adjacent plots.
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
  constructor(private flowerBed: number[], private n: number) {
    this.flowerBed = flowerBed;
    this.n = n;
  }

    solution ():boolean{
        this.flowerBed = [0, ...this.flowerBed, 0];
        for(let i=1; i<this.flowerBed.length - 1; i++){
            if(this.flowerBed[i - 1] == 0 && this.flowerBed[i] == 0 && this.flowerBed[i + 1] == 0){
                this.flowerBed[i] = 1;
                this.n -= 1;
            }
        }
        return this.n <= 0;
  }
}


const canPlaceFlower = new CanPlaceFlower([1, 0, 0, 0, 1], 1);
console.log(canPlaceFlower.solution());