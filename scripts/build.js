const fs = require("fs");
const base = require("../src/tokens/base.json");

const ordered = base.sort((t1, t2) => {
	return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
});

try {
	fs.writeFileSync(__dirname + "/../build/token-list.json", JSON.stringify(ordered));
} catch (e) {
	console.log(e);
	throw new Error("Error writing token-list.json");
}

const mapping = ordered.reduce((mapp, token) => {
	mapp[token.address.toLowerCase()] = token;

	return mapp;
}, {});

try {
	fs.writeFileSync(__dirname + "/../build/token-mapping.json", JSON.stringify(mapping));
} catch (e) {
	console.log(e);
	throw new Error("Error writing token-mapping.json");
}
