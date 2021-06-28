const fs = require("fs");

exports.forLoopMethod = (filePath) => {
  let data = getLines(filePath), array = [];
  for (let i = 0; i < data.length; i++) array.push(compute(data[i]));
  return array;
};

exports.mapMethod = (filePath) => {
  return getLines(filePath).map(compute);
};

exports.recursiveMethodInit = (filePath) => {
  let data = getLines(filePath);
  return recursiveMethod(data);
};

function recursiveMethod(inputArr, outputArr = []) {
  if (inputArr.length != 0) {
    let result = compute(inputArr.shift());
    outputArr.push(result);
    outputArr = recursiveMethod(inputArr, outputArr);
  }
  return outputArr;
}

//! --------------------------------------- HELPER FUNCTIONS ------------------------------------------

// ["0", "Alpha", "AhplA"] => "Mismatch! Bad test data"
function compute(inputArr) {
  return convertInputArrayToBoolean(inputArr) ? "Good test data" : "Mismatch! Bad test data";
}

// ["0", "Alpha", "AhplA"] => false
function convertInputArrayToBoolean(inputArr) {
  let actual = inputArr[0] == "0" ? reverse(inputArr[1]) : inputArr[1].toUpperCase(), expected = inputArr[2];
  return actual == expected;
}

// "Hello" => "olleH"
function reverse(string) {
  return string.split("").reverse().join("");
}

// "input.txt" => [["0", "Car", "raC"], ["0", "Alpha", "AhplA"]...]
function getLines(filePath) {
  let data = fs.readFileSync(filePath, "utf8");
  data = data.split("\n"); // Make the one string an array, split by a newline
  data.shift(); // Return (to nothing) and remove (mutably) the first element in the array
  data = data.map((line) => line.split(" ")); // "0 Alpha AhplA" => ["0", "Alpha", "AhplA"]
  return data;
}
