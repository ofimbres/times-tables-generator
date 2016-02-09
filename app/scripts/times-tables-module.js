(function(exports) {
	var MIN_FACTOR = 2, MAX_FACTOR = 9;
	

		// even?

		// if rightAnswer.length >=2 
		// .. then Inverted number
		// .. else random number
		// Multiple -1 
		// Right answer
		// Multiple +1
	function generateWrongRandomAnswers(problem, count) {
		var answersArray = [problem.result];

		for (var i = 0; i < count; i++) {

		}

		if (problem.result.toString().length > 1) {
			answersArray.push(reverseNumber(problem.result));
		} else {
			answersArray.push(getRandomNumber(problem.x * 2, problem.x * 9));
		}

		// A. 
		addToYOneMoreFactor(problem.x, problem.y, answersArray);
		addToYOneLessFactor(problem.x, problem.y, answersArray);
	}

	function addToXAnotherFactor(problem, answersArray) {
		var factorX;

		if (problem.x < MAX_FACTOR && answersArray.indexOf((problem.x + 1) * problem.y) === -1) {
			factorX = problem.x + 1;
		} else if (problem.x > MIN_FACTOR && answersArray.indexOf((problem.x - 1) * problem.y) === -1) {
			factorX = problem.x - 1 ;
		} else {
			return false;
		}

		var wrongResult = factorX * problem.y;
		answersArray.push(wrongResult);
		return true;
	}

// 1
	function addToYOneMoreFactor(problem, answersArray) {
		var factorY;

		if (problem.y < MAX_FACTOR && answersArray.indexOf(problem.x * (problem.y + 1)) === -1) {
			factorY = problem.y + 1;
		} else {
			factorY = findAvailableFactor(problem, answersArray);
		}

		var wrongResult = problem.x * factorY;
		answersArray.push(wrongResult);
		return true;
	}

	function addToYOneLessFactor(problem, answersArray) {
		var factorY;

		if (problem.y > MIN_FACTOR && answersArray.indexOf(problem.x * (problem.y - 1)) === -1) {
			factorY = problem.y - 1;
		} else {
			factorY = findAvailableFactor(problem, answersArray);
		}

		var wrongResult = problem.x * factorY;
		answersArray.push(wrongResult);
		return true;
	}

	function findAvailableYFactor(problem, answersArray) {
		var y2;
		do {
			y2 = getRandomNumber(MIN_FACTOR, MAX_FACTOR);
		} while(answersArray.indexOf(problem.x * y2) !== -1);

		return y2;
	}

	exports.generateUniqueFacts = generateUniqueFacts;
})(this.timesTablesGenerator = {});