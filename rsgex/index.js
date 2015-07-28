var ref = require('ref');
var ffi = require('ffi');

var rsgex = ref.types.void;
var rsgexPtr = ref.refType(rsgex);

var library = ffi.Library('../rust/target/release/librsgex.so', {
    'rsnew': [ rsgexPtr, [ 'string' ] ],
    'rsdelete': [ 'int', [ rsgexPtr ] ],
    'rsmatch': [ 'bool', [ rsgexPtr, 'string']],
  })
module.exports = {
  new: library.rsnew,
  delete: library.rsdelete,
  match: library.rsmatch,
};
