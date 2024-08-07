class LastWordLength:
    def __init__(self, s:str):
        self.s = s

    def lastLength(self):
        # split_str = [str for str in self.s.split(' ') if str != '']
        # return len(split_str[-1])
        length = 0
        for i in range(len(self.s) - 1, -1, -1):
            if self.s[i] != ' ':
                length += 1
            if length > 0 and self.s[i] == ' ':
                return length

lengthObj = LastWordLength('Hello World')
print(lengthObj.lastLength())