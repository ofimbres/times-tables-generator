// min is inclusive, max is inclusive
function getRandomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max -  min + 1) + min);
}

module.exports = getRandomNumberBetween;