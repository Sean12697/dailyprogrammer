const assert = require('assert'), index = require("../index.js");

describe('Unit Tests', function() {
    it('hexcolor(255, 99, 71) => "#FF6347"', () => assert.strictEqual(index.hexcolor(255, 99, 71), "#FF6347"));
    it('hexcolor(184, 134, 11) => "#B8860B"', () => assert.strictEqual(index.hexcolor(184, 134, 11), "#B8860B"));
    it('hexcolor(189, 183, 107) => "#BDB76B"', () => assert.strictEqual(index.hexcolor(189, 183, 107), "#BDB76B"));
    it('hexcolor(0, 0, 205) => "#0000CD"', () => assert.strictEqual(index.hexcolor(0, 0, 205), "#0000CD"));
});