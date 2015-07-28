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

const RustRegex = require("rsgex");

RustRegex.hello();

/*
var regex = new RustRegex(/(a|b)*abb/);

regex.test("abb");   // true 
regex.test("aabb");  // true 
regex.test("babb");  // true 
regex.test("aaabb"); // true 
regex.test("ababb"); // true 
regex.test("abba");  // false 
regex.test("cabb");  // false 
*/

console.log("done!");
