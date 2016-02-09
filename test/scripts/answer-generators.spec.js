var generators = require('../../app/answer-generators');
var assert = require('chai').assert;

module.exports = function() {
	describe('Answer Generators', function() {
		describe('#invertRightAnswer()', function () {
			var generator = generators.invertRightAnswer;

			it('should change the result of 9x4=36 to 63 and add this value into answers array in position 0', function () {
				var problem = { x: 9, y: 4, result: 36 };
				var answersArray = [];

				assert.equal(true, generator(problem, answersArray));
				assert.equal(answersArray[0], 63);
			});

			it('should return false if exists a repeated answer value in the answers array', function () {
				var problem = { x: 5, y: 3, result: 15 };
				var answersArray = [30, 51, 42];

				assert.equal(false, generator(problem, answersArray));
				assert.isUndefined(answersArray[3]);
			});
		});

		describe('#add1ToYFactor()', function() {
			var generator = generators.add1ToYFactor;

			it('should increment the y factor of 9x5=45 and the result (54) into answers array in position 0', function() {
				var problem = { x: 9, y: 5, result: 45 };
				var answersArray = [];

				assert.equal(true, generator(problem, answersArray));
				assert.equal(answersArray[0], 54);
			});

			it('should return false if exists a repeated answer value in the answers array', function() {
				var problem = { x: 9, y: 5, result: 45 };
				var answersArray = [45, 54, 13];

				assert.equal(false, generator(problem, answersArray));
				assert.isUndefined(answersArray[3]);
			});
		});

		describe('#substract1ToYFactor()', function() {
			var generator = generators.substract1ToYFactor;

			it('should increment the y factor of 9x5=45 and the result (36) into answers array in position 0', function() {
				var problem = { x: 9, y: 5, result: 45 };
				var answersArray = [];

				assert.equal(true, generator(problem, answersArray));
				assert.equal(answersArray[0], 36);
			});

			it('should return false if exists a repeated answer value in the answers array', function() {
				var problem = { x: 9, y: 5, result: 45 };
				var answersArray = [45, 36, 13];

				assert.equal(false, generator(problem, answersArray));
				assert.isUndefined(answersArray[3]);
			});
		});

		describe('#findRandomNumber()', function() {
			var generator = generators.findRandomNumber1;

			it('should find 10 numbers into the range specified', function() {
				var problem = { x: 8, y: 5, result: 40};
				var answersArray = [];

				var minRange = problem.result - (problem.x * 2);
				var maxRange = problem.result + (problem.x * 2);

				for (var i = 0; i < 10; i++) {
					assert.equal(true, generator(problem, answersArray));
					assert.isAbove(answersArray[0], minRange - 1);
					assert.isBelow(answersArray[0], maxRange + 1);

					answersArray = [];
				}
			});
		});
	});
};