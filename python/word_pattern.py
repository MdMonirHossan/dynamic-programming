class WordPattern:
    def __init__(self, pattern: str, string:str):
        self.pattern = pattern
        self.string = string
    
    # Both Time and space efficient
    def is_match(self):
        split_str = self.string.split(' ')
        if len(self.pattern) != len(split_str):
            return False
        ch_to_word = {}
        word_to_char = {}

        for i in range(len(self.pattern)):
            if self.pattern[i] in ch_to_word and ch_to_word[self.pattern[i]] != split_str[i]:
                return False
            if split_str[i] in word_to_char and word_to_char[split_str[i]] != self.pattern[i]:
                return False
            
            ch_to_word[self.pattern[i]] = split_str[i]
            word_to_char[split_str[i]] = self.pattern[i]
        
        return True

    # General solution
    def is_match1(self):
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


word_obj = WordPattern('abba', 'dog cat cat fish')

print(word_obj.is_match())