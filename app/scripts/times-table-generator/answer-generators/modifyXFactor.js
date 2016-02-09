function modifyXFactor(problem, answersArray, newXFactor) {
	if (answersArray.indexOf(newXFactor * problem.y) === -1) {
		var wrongAnswer = newXFactor * problem.y;
		answersArray.push(wrongAnswer);
		return true;
	}

	return false;
}

module.exports = modifyXFactor;