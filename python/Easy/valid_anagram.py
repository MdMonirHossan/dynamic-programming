def is_anagram(s, t):
	# list_s = sorted(list(s))
	# list_t = sorted(list(t))
	# if list_s == list_t:
		# return True
	# return False

	if len(s) != len(t):
		return False

	count_s, count_t = {} , {}

	for i in range(len(s)):
		count_s[s[i]] = 1 + count_s.get(s[i], 0)
		count_t[t[i]] = 1 + count_t.get(t[i], 0)
	for c in count_s:
		if count_s[c] != count_t.get(c, 0):
			return False
	return True


print(is_anagram('anagram', 'nagaram'))
print(is_anagram('tar', 'car'))