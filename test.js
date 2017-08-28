const lightcookie = require("./");
const w = require("whew");

w.add("Parsing cookie with non-ASCII characters", (result) => {
	var parseCookieResult = lightcookie.parse("foo=bar; equation=E%3Dmc%5E2");
	result(parseCookieResult.equation === "E=mc^2", "Equation is " + (parseCookieResult.equation || "invalid."));
});

w.add("Parsing cookie with special characters", (result) => {
	var parseCookieResult = lightcookie.parse("copyright=%C2%A9");
	result(parseCookieResult.copyright === "©", "Copyright symbol is " + (parseCookieResult.copyright || "invalid."));
});

w.add("Parsing cookie with unusual formatting", (result) => {
	var parseCookieResult = lightcookie.parse("        foo=bar;        test=hey;");
	result(parseCookieResult.foo === "bar", "foo=" + (parseCookieResult.foo || "null"));
});

w.add("Parsing cookie with properties without values", (result) => {
	var parseCookieResult = lightcookie.parse("hey=hi;noValue;test=test2");
	result(parseCookieResult.hey === "hi" && parseCookieResult.noValue === null && parseCookieResult.test === "test2", (parseCookieResult.noValue === null ? "No value property is represented as null." : "No value property is not represented as null."));
});

w.add("Parsing cookie with spaces in value (Support for older spec)", (result) => {
	var parseCookieResult = lightcookie.parse("hi=hello there; novalue; hello= ;");
	result(parseCookieResult.hi === "hello there" && parseCookieResult.hello === " ", "hi=" + parseCookieResult.hi);
});

w.add("Serialize cookie", (result) => {
	var serializeCookieResult = lightcookie.serialize({
		"prop1": "prop2",
		"copyright": "©"
	});
	result(serializeCookieResult === "prop1=prop2;copyright=%C2%A9", "Serialized to " + serializeCookieResult);
});

w.add("Serialize cookie property with no value", (result) => {
	var serializeCookieResult = lightcookie.serialize({
		"prop1": "prop2",
		"emptyProp": null
	});
	result(serializeCookieResult === "prop1=prop2;emptyProp", "Serialized to " + serializeCookieResult);
});

w.test();