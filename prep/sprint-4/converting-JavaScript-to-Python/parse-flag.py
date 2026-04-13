import argparse

parser = argparse.ArgumentParser(
    prog="count-containing-words",
    description="Counts words in a file that contain a particular character",
)

parser.add_argument("-c", "--char", help="The character to search for", default="e")
parser.add_argument("path", help="The file to search")

args = parser.parse_args()
print(args)

with open(args.path, "r") as f:
    content = f.read()

print(content);

splitted_content = content.split(" ");
print(splitted_content);

filtered_content = list(filter(lambda x: args.char in x, splitted_content));

counted_filter = len(filtered_content);
print(filtered_content);
print(counted_filter);
