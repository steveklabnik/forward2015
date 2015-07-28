pub struct Lol;
use std::mem;

#[no_mangle]
pub extern fn rsgex_new(_: String) -> *const Lol {
    let l = &*Box::new(Lol) as *const _;
    mem::forget(l);

    l
}

#[no_mangle]
pub extern fn rsgex_delete(_: *const Lol) -> i32 {
    5
}

#[no_mangle]
pub extern fn rsgex_match(_: String) -> bool {
    true
}
