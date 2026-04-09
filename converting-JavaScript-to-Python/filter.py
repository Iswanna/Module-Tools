content = "this is a list of words".split(" ");
char = "i"

filtered = [x for x in content if char in x]


print(filtered)