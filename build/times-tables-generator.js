(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.timesTablesGenerator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var modifyYFactor = require('./modifyYFactor');

function add1ToYFactor(problem, answersArray) {
	return modifyYFactor(problem, answersArray, problem.y + 1);
}

//var MIN_FACTOR = 2, MAX_FACTOR = 9;

/*function add1ToYFactor(problem, answersArray) {
	var newYFactor = problem.y + 1;

	if (problem.y < MAX_FACTOR && answersArray.indexOf(problem.x * newYFactor) === -1) {
		var wrongAnswer = problem.x * newYFactor;
		answersArray.push(wrongAnswer);
		return true;
	}

	return false;
}*/

module.exports = add1ToYFactor;
},{"./modifyYFactor":6}],2:[function(require,module,exports){
var utils = require('../utils');

function findRandomNumber1(problem, answersArray) {
	var tolerance = problem.x * (problem.x <= 5 ? 4 : 2);

	var r = utils.getRandomNumberBetween(problem.result - tolerance, problem.result + tolerance);

	if (answersArray.indexOf(r) === -1) {
		answersArray.push(r);
		return true;
	} 
	
	return false;
}

module.exports = findRandomNumber1;
},{"../utils":15}],3:[function(require,module,exports){
var utils = require('../utils');

function findRandomNumber2(problem, answersArray) {
	var r = utils.getRandomNumberBetween(problem.x * 2, problem.x * 9);

	if (answersArray.indexOf(r) === -1) {
		answersArray.push(r);
		return true;
	} 
	
	return false;
}

module.exports = findRandomNumber2;
},{"../utils":15}],4:[function(require,module,exports){
var answerGenerators = {
	invertRightAnswer: require('./invertRightAnswer'),
	add1ToYFactor: require('./add1ToYFactor'),
	substract1ToYFactor: require('./substract1ToYFactor'),
	findRandomNumber1: require('./findRandomNumber1'),
	findRandomNumber2: require('./findRandomNumber2'),
};

module.exports = answerGenerators;
},{"./add1ToYFactor":1,"./findRandomNumber1":2,"./findRandomNumber2":3,"./invertRightAnswer":5,"./substract1ToYFactor":7}],5:[function(require,module,exports){
var utils = require('../utils');

function invertAnswer(problem, answersArray) {
	var reversedNumber = utils.reverseNumber(problem.result);

	if (answersArray.indexOf(reversedNumber) === -1) {
		answersArray.push(reversedNumber);
		return true;
	}

	return false;
}

module.exports = invertAnswer;
},{"../utils":15}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
var modifyYFactor = require('./modifyYFactor');

function substract1ToYFactor(problem, answersArray) {
	return modifyYFactor(problem, answersArray, problem.y - 1);
}

module.exports = substract1ToYFactor;
},{"./modifyYFactor":6}],8:[function(require,module,exports){
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

	if (Math.random() > 0.5) {
		generators.add1ToYFactor(problem, currentAnswersArray);
	} else {
		generators.substract1ToYFactor(problem, currentAnswersArray);
	}

	// Last phase
	while(currentAnswersArray.length < 4) {
		generators.findRandomNumber2(problem, currentAnswersArray);
	}

	return utils.shuffle(currentAnswersArray);
}

module.exports = answerSelector;

},{"./answer-generators":4,"./utils":15}],9:[function(require,module,exports){
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

console.log(timesTablesGenerator());

},{"./answerSelector":8,"./levelSelector":10}],10:[function(require,module,exports){
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

},{"./levels":11}],11:[function(require,module,exports){
var levels = {
	uniqueFacts: require('./uniqueFacts')
};

module.exports = levels;
},{"./uniqueFacts":12}],12:[function(require,module,exports){
var utils = require('../utils');

function uniqueFacts(quantity) {
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

	return factors.slice(0, 10);
}

module.exports = uniqueFacts;

},{"../utils":15}],13:[function(require,module,exports){
function bubbleSort(array) {
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}

	return array;
}

module.exports = bubbleSort;
},{}],14:[function(require,module,exports){
// min is inclusive, max is inclusive
function getRandomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max -  min + 1) + min);
}

module.exports = getRandomNumberBetween;
},{}],15:[function(require,module,exports){
var utils = {
	shuffle: require('./shuffle'),
	bubbleSort: require('./bubbleSort'),
	getRandomNumberBetween: require('./getRandomNumberBetween'),
	reverseNumber: require('./reverseNumber')
};

module.exports = utils;
},{"./bubbleSort":13,"./getRandomNumberBetween":14,"./reverseNumber":16,"./shuffle":17}],16:[function(require,module,exports){
function reverseNumber(n) {
	var string = n.toString();
	var charArray = [];

	for (var i = string.length - 1; i >= 0; i--) {
		charArray.push(string.charAt(i));
	}

	return parseInt(charArray.join(''));
}

module.exports = reverseNumber;
},{}],17:[function(require,module,exports){
function shuffle(array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle
	while (m) {
		// Pick a remaining element
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}

module.exports = shuffle;
},{}]},{},[9])(9)
});