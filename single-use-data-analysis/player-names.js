import fs from "fs";

const jsonData = JSON.parse(fs.readFileSync("./people-data.json", "utf8"));

function printPlayersAfterDaniel(jsonData) {
    const playersAfterDaniel = [];
    
    for (let i = 0; i < jsonData.length - 1; i++) {
        if (jsonData[i].name === 'Daniel') {
            playersAfterDaniel.push(jsonData[i + 1].name);
        }
    }
    
    return playersAfterDaniel;
}

console.log(printPlayersAfterDaniel(jsonData));