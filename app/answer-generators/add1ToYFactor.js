var modifyYFactor = require('./modifyYFactor');

function add1ToYFactor(problem, answersArray) {
	return modifyYFactor(problem, answersArray, problem.y + 1);
}

//var MIN_FACTOR = 2, MAX_FACTOR = 9;

/*function add1ToYFactor(problem, answersArray) {
	var newYFactor = problem.y + 1;

	if (problem.y < MAX_FACTOR && answersArray.indexOf(problem.x * newYFactor) === -1) {
		var wrongAnswer = problem.x * newYFactor;
		answersArray.push(wrongAnswer);
		return true;
	}

	return false;
}*/

module.exports = add1ToYFactor;