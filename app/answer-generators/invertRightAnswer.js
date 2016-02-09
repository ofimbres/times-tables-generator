var utils = require('../utils');

function invertAnswer(problem, answersArray) {
	var reversedNumber = utils.reverseNumber(problem.result);

	if (answersArray.indexOf(reversedNumber) === -1) {
		answersArray.push(reversedNumber);
		return true;
	}

	return false;
}

module.exports = invertAnswer;