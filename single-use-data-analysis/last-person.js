import fs from "fs";

const jsonData = JSON.parse(fs.readFileSync("./people-data.json", "utf8"));

function lastPerson(jsonData) {
    return jsonData[jsonData.length - 1].name;
}

console.log(lastPerson(jsonData));