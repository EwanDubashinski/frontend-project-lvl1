# Makefile
install: #
	npm install
brain-games: # run
	node bin/brain-games.js
publish: # not real
	npm publish --dry-run
lint:
	npx eslint .
