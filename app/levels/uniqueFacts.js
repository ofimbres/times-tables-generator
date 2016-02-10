var utils = require('../utils');

function generateUniqueFacts(quantity) {
	var from = 2, to = 9;
	var factors = [];

	for (var i = from; i <= to; i++) {
		for (var j = i; j <= to; j++) {
			var newFactor = { x: i, y: j, result: i * j };
			factors.push(newFactor);
		}
	}

	utils.shuffle(factors);

	/*for (var i = 0; i < quantity; i++) {
		factors[i].answers = answerSelector(factors[i]);
	}*/

	return factors;
}

module.exports = generateUniqueFacts;