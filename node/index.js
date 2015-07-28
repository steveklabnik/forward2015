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

var regex = RustRegex.rsgex.rsgex_new("/(a|b)*abb/");

RustRegex.rsgex.rsgex_match("abb");   // true 
RustRegex.rsgex.rsgex_match("aabb");  // true 
RustRegex.rsgex.rsgex_match("babb");  // true 
RustRegex.rsgex.rsgex_match("aaabb"); // true 
RustRegex.rsgex.rsgex_match("ababb"); // true 
RustRegex.rsgex.rsgex_match("abba");  // false 
RustRegex.rsgex.rsgex_match("cabb");  // false 

RustRegex.rsgex.rsgex_delete(regex);

console.log("done!");
