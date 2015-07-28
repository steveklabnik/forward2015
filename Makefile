default: rust
	cd node && node index.js

rust:
	cd rust && cargo build --release


