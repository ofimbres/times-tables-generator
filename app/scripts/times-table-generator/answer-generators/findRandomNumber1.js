var utils = require('../utils');

function findRandomNumber1(problem, answersArray) {
	var tolerance = problem.x * (problem.x <= 5 ? 4 : 2);

	var r = utils.getRandomNumberBetween(problem.result - tolerance, problem.result + tolerance);

	if (answersArray.indexOf(r) === -1) {
		answersArray.push(r);
		return true;
	} 
	
	return false;
}

module.exports = findRandomNumber1;