content = "this is a list of words".split(" ");
char = "i"

filtered = list(filter(lambda x: char in x, content))


print(filtered)