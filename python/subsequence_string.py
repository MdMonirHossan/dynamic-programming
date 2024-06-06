class Subsequence:

    def __init__(self, s, t):
        self.s = s
        self.t = t

    def subsequence(self):
        # newStr = ''
        # for ch in self.t:
        #     if ch in self.s:
        #         newStr = newStr + ch
        # print(newStr)
        # if newStr == self.s:
        #     return True
        # return False
        i,j = 0,0

        while i < len(self.s) and j < len(self.t):
            if self.s[i] == self.t[j]:
                i += 1
            j +=1
        return True if i == len(self.s) else False
        


obj = Subsequence('abc', 'angbytc')
print(obj.subsequence())