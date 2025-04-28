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
    def __init__(self, flowerbed, num):
        self.flowerbed = flowerbed
        self.num = num

    def solution(self):
        self.flowerbed = [0] + self.flowerbed + [0] # Adding 0's to the 1st & last index of flower bed

        for i in range(1, len(self.flowerbed) - 1):  # ignore first and last index
            if self.flowerbed[i - 1] == 0 and self.flowerbed[i] == 0 and self.flowerbed[i + 1] == 0:
                self.flowerbed[i] = 1
                self.num -= 1
        
        return self.num <= 0
    

can_place_flower_obj = CanPlaceFlower([1, 0, 0, 0, 1], 1)
print(can_place_flower_obj.solution())