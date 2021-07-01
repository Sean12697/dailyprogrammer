const assert = require('assert'), index = require("../index.js");

describe('Unit Tests', function() {
    it('Unit Test', () => {
        let expected = ["Room 0, 20 minute average visit, 2 visitors total"];
        assert.deepStrictEqual(index.main(__dirname + "/input.txt"), expected)
    });
});