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

regex.rsgex_match("abb");   // true 
regex.rsgex_match("aabb");  // true 
regex.rsgex_match("babb");  // true 
regex.rsgex_match("aaabb"); // true 
regex.rsgex_match("ababb"); // true 
regex.rsgex_match("abba");  // false 
regex.rsgex_match("cabb");  // false 

RustRegex.rsgex_delete(regex);

console.log("done!");
