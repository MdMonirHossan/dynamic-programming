'''
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
'''

class CanPlaceFlower:
    def __init__(self, flower_bed, n):
        self.flower_bed = flower_bed
        self.n = n

    def solution(self):
        self.flower_bed = [0] + self.flower_bed + [0]
        for i in range(1, len(self.flower_bed) - 1):
            if self.flower_bed[i - 1] == 0 and self.flower_bed[i] == 0 and self.flower_bed[i + 1] == 0:
                self.flower_bed[i] = 1
                self.n -= 1
        return self.n <= 0


can_place_flower = CanPlaceFlower([1, 0, 0, 0, 1], 1)
print(can_place_flower.solution())