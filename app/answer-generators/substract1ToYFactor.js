var modifyYFactor = require('./modifyYFactor');

function substract1ToYFactor(problem, answersArray) {
	return modifyYFactor(problem, answersArray, problem.y - 1);
}

module.exports = substract1ToYFactor;