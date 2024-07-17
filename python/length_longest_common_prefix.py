class LongestCommonPrefixLength:
    def __init__(self, arr1, arr2):
        self.arr1 = arr1
        self.arr2 = arr2

    
    def longestPrefixLength(self):
        for i in self.arr1:
            print(i)



lengthPrefixObj = LongestCommonPrefixLength([1, 10, 100], [10000])
print(lengthPrefixObj.longestPrefixLength())