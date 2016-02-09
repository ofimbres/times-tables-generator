var MIN_FACTOR = 2,
	MAX_FACTOR = 9;

function isInsideOfYFactorRange(y) {
	return y > MIN_FACTOR && y < MAX_FACTOR;
}

function modifyYFactor(problem, answersArray, newYFactor) {
	if (isInsideOfYFactorRange(problem.y) && answersArray.indexOf(problem.x * newYFactor) === -1) {
		var wrongAnswer = problem.x * newYFactor;
		answersArray.push(wrongAnswer);
		return true;
	}

	return false;
}

module.exports = modifyYFactor;