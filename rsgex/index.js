var ref = require('ref');
var ffi = require('ffi');

var rsgex = ref.types.void;
var rsgexPtr = ref.refType(rsgex);

module.exports = {
  rsgex: ffi.Library('../rust/target/release/librsgex.so', {
    'rsgex_new': [ rsgexPtr, [ 'string' ] ],
    'rsgex_delete': [ 'int', [ rsgexPtr ] ],
    'rsgex_match': [ 'bool', [ 'string']],
  })
};
