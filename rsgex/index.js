var ref = require('ref');
var ffi = require('ffi');

var rsgex = ref.types.void;
var rsgexPtr = ref.refType(rsgex);

var library = ffi.Library('../rust/target/release/librsgex', {
    'rsnew': [ rsgexPtr, [ 'string' ] ],
    'rsmatch': [ 'bool', [ rsgexPtr, 'string']],
  })
module.exports = {
  new: library.rsnew,
  match: library.rsmatch,
};
