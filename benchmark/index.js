const fs = require('fs');
const Kapital = fs.readFileSync('./data/kapital.txt', 'utf-8');

const Benchmark =  require('benchmark');
const suite = new Benchmark.Suite;

const regex = new RegExp(/\bvalue\b/g);

const Regex = require('regex');
const lib_regex = new Regex(/\bvalue\b/g); 

const RustRegex = require('../rsgex');
const rust_regex = RustRegex.new("\bvalue\b");

suite
.add('JSRegexLib#test', function() {
  lib_regex.test(Kapital);
})
.add('JSRegExp#match', function() {
  Kapital.match(regex);
})
.add('Rust#match', function() {
  RustRegex.match(rust_regex, Kapital);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ 'async': true });
