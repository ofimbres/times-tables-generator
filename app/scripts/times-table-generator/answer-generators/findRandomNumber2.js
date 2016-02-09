var utils = require('../utils');

function findRandomNumber2(problem, answersArray) {
	var r = utils.getRandomNumberBetween(problem.x * 2, problem.x * 9);

	if (answersArray.indexOf(r) === -1) {
		answersArray.push(r);
		return true;
	} 
	
	return false;
}

module.exports = findRandomNumber2;