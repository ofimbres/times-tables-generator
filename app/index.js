var levelSelector = require('./levelSelector'),
	answerSelector = require('./answerSelector');

function timesTablesGenerator() {
	var quantity = 10;
	var level = 'uniqueFacts';

	var problems = levelSelector(level, quantity);

	for (var i = 0; i < quantity; i++) {
		problems[i].answers = answerSelector(problems[i]);
	}

	return problems;
}

module.exports = timesTablesGenerator;
