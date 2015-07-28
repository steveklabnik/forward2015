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

RustRegex.match(regex, "abb");   // true 
RustRegex.match(regex, "aabb");  // true 
RustRegex.match(regex, "babb");  // true 
RustRegex.match(regex, "aaabb"); // true 
RustRegex.match(regex, "ababb"); // true 
RustRegex.match(regex, "abba");  // false 
RustRegex.match(regex, "cabb");  // false 

RustRegex.delete(regex);

console.log("done!");
