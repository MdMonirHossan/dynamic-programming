class WordPattern:
    def __init__(self, pattern: str, string:str):
        self.pattern = pattern
        self.string = string
    
    def is_match(self):
        result = {}
        split_str = self.string.split()
        if len(self.pattern) != len(split_str):
            return False
        for i in range(len(self.pattern)):
            if self.pattern[i] not in result:
                if split_str[i] in result.values():
                    return False
                result[self.pattern[i]] = split_str[i]
            elif split_str[i] != result[self.pattern[i]]:
                return False
        print(result)
        return True


word_obj = WordPattern('abba', 'Dog cat cat fish')

print(word_obj.is_match())