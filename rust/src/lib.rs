extern crate libc;
extern crate regex;

use std::mem;
use libc::c_char;
use std::ffi::CStr;
use std::str;

#[repr(C)]
pub struct Regex {
    regex: regex::Regex,
}

#[no_mangle]
pub extern fn rsnew(regex: *const c_char) -> *mut Regex {
    let c_str: &CStr = unsafe { CStr::from_ptr(regex) };
    let buf: &[u8] = c_str.to_bytes();
    let str_slice: &str = str::from_utf8(buf).unwrap();

    let regex = Regex { regex: regex::Regex::new(str_slice).unwrap() };
    let l = &mut *Box::new(regex) as *mut _;
    mem::forget(l);

    l
}

#[no_mangle]
pub extern fn rsmatch(regex: *const Regex, text: *const c_char) -> bool {
    let c_str: &CStr = unsafe { CStr::from_ptr(text) };
    let buf: &[u8] = c_str.to_bytes();
    let str_slice: &str = str::from_utf8(buf).unwrap();
    println!("attempting to match {}", str_slice);

    unsafe { (*regex).regex.is_match(str_slice) }
}

#[cfg(test)]
mod tests {
    use super::*;
    use libc::c_char;

    #[test]
    fn simple_match() {
        let text = "ab\0".as_ptr() as *const c_char;
        let text2 = "b\0".as_ptr() as *const c_char;
        let regex = rsnew(text);

        assert!(rsmatch(regex, text));
        assert!(!rsmatch(regex, text2));
    }

    #[test]
    fn more_complex_match() {
        let text = "a*abb\0".as_ptr() as *const c_char;
        let text2 = "aabb\0".as_ptr() as *const c_char;
        let regex = rsnew(text);

        assert!(rsmatch(regex, text2));
    }
}
