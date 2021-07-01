exports.main = main;

const fs = require("fs");

function main(filePath) {
    let data = getLines(filePath);
    let uniqueRoomIdsSorted = getUniqueInstances(data, 1).sort((a, b) => a - b);
    return uniqueRoomIdsSorted.map(roomId => roomArrayToString(roomId, data));
}

function roomArrayToString(roomId, originalArray) {
    let roomEntries = originalArray.filter(entry => entry[1] == roomId);
    let averageTime = (sum(roomEntries, "O") - sum(roomEntries, "I")) / 2;
    let totalUniqueVisitors = getUniqueInstances(roomEntries, 0).length;
    return `Room ${roomId}, ${averageTime} minute average visit, ${totalUniqueVisitors} visitor${ totalUniqueVisitors > 1 ? "s" : "" } total`;
}

function getUniqueInstances(arrayOfArrays, index) {
    let columnValues = arrayOfArrays.map(array => array[index]);
    return columnValues.filter((value, index, self) => self.indexOf(value) === index);
}

function sum(arrayOfArrays, value) {
    return arrayOfArrays.filter(array => array[2] == value).map(array => parseInt(array[3])).reduce((t, v) => t + v);
}

function getLines(filePath) {
    let data = fs.readFileSync(filePath, "utf8").split("\n");
    data.shift(); 
    return data.map((line) => line.split(" "));
}