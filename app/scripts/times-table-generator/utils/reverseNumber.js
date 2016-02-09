function reverseNumber(n) {
	var string = n.toString();
	var charArray = [];

	for (var i = string.length - 1; i >= 0; i--) {
		charArray.push(string.charAt(i));
	}

	return parseInt(charArray.join(''));
}

module.exports = reverseNumber;