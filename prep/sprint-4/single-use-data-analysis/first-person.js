import fs from "fs";

const jsonData = JSON.parse(fs.readFileSync("./people-data.json", "utf8"));

function firstName(jsonData) {
  return jsonData[0].name;
}

console.log(firstName(jsonData));
