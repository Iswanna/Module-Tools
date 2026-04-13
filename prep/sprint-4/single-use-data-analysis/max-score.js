import fs from "fs";

const jsonData = JSON.parse(fs.readFileSync("./people-data.json", "utf8"));

function maxScore(jsonData) {
    const personObject = jsonData.reduce(function(prev, current) {
        return (prev.score > current.score) ? prev : current;
    })

    return personObject.name;
}

console.log(maxScore(jsonData));