const lc = require("./");

console.log(lc.parse("foo=bar; equation=E%3Dmc%5E2"));

console.log(lc.serialize({
	"hey": "hihi"
}));