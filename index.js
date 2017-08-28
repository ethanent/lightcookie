const parseRegex = /([^=; ]+)=?([^;]+)?;?/g; // Formerly ([A-Za-z0-9%]+)=?([A-Za-z0-9%]+)?;?

/**
* Super lightweight cookie parser and serializer
* @module lightcookie
*/

module.exports = {
	/**
	* Parse a cookie string
	* @param {string} cookieString - A cookie string
	* @returns {Object} Interpreted cookie data as an Object
	*/
	"parse": (cookieString) => {
		var currentPair = parseRegex.exec(cookieString);

		var outputPairs = {};

		while (currentPair !== null) {
			outputPairs[decodeURIComponent(currentPair[1])] = (currentPair[2] === null || currentPair[2] === undefined ? null : decodeURIComponent(currentPair[2]));
			currentPair = parseRegex.exec(cookieString);
		}

		return outputPairs;
	},
	/**
	* Serialize an object to cookie format
	* @param {Object} cookieData - Object to serialize to cookie string
	* @returns {string} Cookie string
	*/
	"serialize": (cookieData) => {
		var cookieProps = Object.keys(cookieData);
		var serializedCookie = "";

		for (let i = 0; i < cookieProps.length; i++) {
			serializedCookie += encodeURIComponent(cookieProps[i]) + (cookieData[cookieProps[i]] === null ? "" : ("=" + encodeURIComponent(cookieData[cookieProps[i]]) + (i < cookieProps.length - 1 ? ";" : "")));
		}
		
		return serializedCookie;
	}
};