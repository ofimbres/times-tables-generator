var levels = require('./levels');

function levelSelector(level, quantity) {
	var problems;

	switch (level) {
		case 'uniqueFacts':
			problems = levels.uniqueFacts(quantity);
			break;
		default: throw Error(level + ' level not exists');
	}

	return problems;
}

module.exports = levelSelector;
