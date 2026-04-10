import { program } from "commander";
import { promises as fs } from "node:fs";

program
    .name("count-containing-words")
    .description("Counts words in a file that contain a particular character")
    .option("-c, --char <char>", "The character to search for", "e")
    .argument("<path>", "The file path to process");

program.parse();

const argv = program.args;
console.log(argv);
const path = argv[0];
console.log(path);
const char = program.opts().char;
console.log(char);

const content = await fs.readFile(path, "utf-8");
console.log(content);

console.log(content.split(" ").filter((word) => word.includes(char)).length);