const Regex = require("regex");
const Chai = require("chai");
var assert = Chai.assert;

var regex = new Regex(/(a|b)*abb/);

assert.equal(regex.test("abb"), true);
assert.equal(regex.test("aabb"), true);
assert.equal(regex.test("babb"), true);
assert.equal(regex.test("aaabb"), true);
assert.equal(regex.test("ababb"), true);
assert.equal(regex.test("abba"), false);
assert.equal(regex.test("cabb"), false);

console.log("done!");

const RustRegex = require("../rsgex");

var regex = RustRegex.new("/(a|b)*abb/");

assert.equal(RustRegex.match(regex, "abb"), true);
assert.equal(RustRegex.match(regex, "aabb"), true);
assert.equal(RustRegex.match(regex, "babb"), true);
assert.equal(RustRegex.match(regex, "aaabb"), true);
assert.equal(RustRegex.match(regex, "ababb"), true);
assert.equal(RustRegex.match(regex, "abba"), false);
assert.equal(RustRegex.match(regex, "cabb"), false);

console.log("done!");
