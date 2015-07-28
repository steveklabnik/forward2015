default:
	cd rust && cargo build --release
	cd node && node index.js
