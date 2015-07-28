extern crate libc;

pub struct Lol;
use std::mem;

use libc::c_char;
use std::ffi::CStr;
use std::str;

#[no_mangle]
pub extern fn rsgex_new(regex: *const c_char) -> *const Lol {
    let c_str: &CStr = unsafe { CStr::from_ptr(regex) };
    let buf: &[u8] = c_str.to_bytes();
    let str_slice: &str = str::from_utf8(buf).unwrap();
    let str_buf: String = str_slice.to_owned();

    let l = &*Box::new(Lol) as *const _;
    mem::forget(l);

    l
}

#[no_mangle]
pub extern fn rsgex_delete(_: *const Lol) -> i32 {
    5
}

#[no_mangle]
pub extern fn rsgex_match(_: *const c_char) -> bool {
    true
}
