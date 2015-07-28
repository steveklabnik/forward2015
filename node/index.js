const Regex = require("regex");

var regex = new Regex(/(a|b)*abb/);

regex.test("abb");   // true 
regex.test("aabb");  // true 
regex.test("babb");  // true 
regex.test("aaabb"); // true 
regex.test("ababb"); // true 
regex.test("abba");  // false 
regex.test("cabb");  // false 

console.log("done!");

const RustRegex = require("../rsgex");

var regex = RustRegex.new("/(a|b)*abb/");

RustRegex.match("abb");   // true 
RustRegex.match("aabb");  // true 
RustRegex.match("babb");  // true 
RustRegex.match("aaabb"); // true 
RustRegex.match("ababb"); // true 
RustRegex.match("abba");  // false 
RustRegex.match("cabb");  // false 

RustRegex.delete(regex);

console.log("done!");
