default: rust/target/release/librsgex.so
	cd node && node index.js

rust/target/release/librsgex.so:
	cd rust && cargo build --release


