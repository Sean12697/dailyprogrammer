const assert = require("assert"),
  index = require("../index.js");

let expected = [
  "Good test data",
  "Mismatch! Bad test data",
  "Mismatch! Bad test data",
  "Good test data",
  "Good test data",
  "Mismatch! Bad test data",
];

describe("Unit Tests", function () {

    console.log("Expected: ", expected);

  it("For Loop Method", () => {
    let loopResult = index.forLoopMethod(__dirname + "/input.txt");
    console.log("Loop Result: ", loopResult);
    assert.deepStrictEqual(loopResult, expected);
  });

  it("Map Method", () => {
    let mapResult = index.mapMethod(__dirname + "/input.txt");
    console.log("Map Result: ", mapResult);
    assert.deepStrictEqual(mapResult, expected);
  });

  it("Recursive Method", () => {
    let recursiveResult = index.recursiveMethodInit(__dirname + "/input.txt");
    console.log("Recursive Result: ", recursiveResult);
    assert.deepStrictEqual(recursiveResult, expected);
  });
});
