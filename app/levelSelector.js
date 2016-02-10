var levels = require('./levels');

function levelSelector(level, quantity) {
	var problems;

	switch (level) {
		case 'uniq-facts':
			problems = levels.uniqueFacts(quantity);
			break;
		default: throw Error(level + ' level not exists');
	}

	return problems;
}

module.exports = levelSelector;