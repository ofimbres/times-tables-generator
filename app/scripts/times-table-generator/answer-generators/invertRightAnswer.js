var utils = require('../utils');

function invertAnswer(problem, answersArray) {
	var reversedNumber = utils.reverseNumber(problem.result);

	if (answersArray.indexOf(reversedNumber) === -1) {
		answersArray.push(reversedNumber);
		return true;
	}

	return false;
}

function canExecuteGenerator() {
	return problem.result.toString().length > 1;
}

function canRegisterAnswer(problem, currentAnswersArray, reversedNumber) {
	return currentAnswersArray.indexOf(reversedNumber) === -1;  // is not repeated?
}

module.exports = invertAnswer;