var generators = require('./answer-generators'),
	utils = require('./utils');

// even?
// if rightAnswer.length >=2 
// .. then Inverted number
// .. else random number
// Multiple -1 
// Right answer
// Multiple +1
function answerSelector(problem) {
	var currentAnswersArray = [problem.result];

	if (problem.result.toString().length > 1) {
		generators.invertRightAnswer(problem, currentAnswersArray);
	} else {
		generators.findRandomNumber1(problem, currentAnswersArray);
	}

	generators.add1ToYFactor(problem, currentAnswersArray);
	generators.substract1ToYFactor(problem, currentAnswersArray);

	// Last phase
	while(currentAnswersArray.length < 4) {
		generators.findRandomNumber2(problem, currentAnswersArray);
	}

	return utils.shuffle(currentAnswersArray);
}

module.exports = answerSelector;