extern crate libc;

use std::mem;
use libc::c_char;
use std::ffi::CStr;
use std::str;

#[repr(C)]
pub struct Regex;

#[no_mangle]
pub extern fn rsnew(regex: *const c_char) -> *const Regex {
    let c_str: &CStr = unsafe { CStr::from_ptr(regex) };
    let buf: &[u8] = c_str.to_bytes();
    let str_slice: &str = str::from_utf8(buf).unwrap();
    let str_buf: String = str_slice.to_owned();

    let l = &*Box::new(Regex) as *const _;
    mem::forget(l);

    l
}

#[no_mangle]
pub extern fn rsdelete(_: *const Regex) -> i32 {
    5
}

#[no_mangle]
pub extern fn rsmatch(_: *const Regex, text: *const c_char) -> bool {
    let c_str: &CStr = unsafe { CStr::from_ptr(text) };
    let buf: &[u8] = c_str.to_bytes();
    let str_slice: &str = str::from_utf8(buf).unwrap();
    let str_buf: String = str_slice.to_owned();

    true
}
