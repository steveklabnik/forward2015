default:
	rustdoc index.md -o . --html-in-header=header.inc.html --markdown-no-toc
	cd rust && cargo build --release
	cd node && node index.js

