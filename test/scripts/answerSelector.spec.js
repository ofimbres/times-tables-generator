var answerSelector = require('../../app/answerSelector');
var utils = require('../../app/utils');
var assert = require('chai').assert;

module.exports = function() {
	describe('Times Table Generator', function() {
		describe('#answerSelector()', function () {

			it('should create an array with 4 different answers', function () {
				var problem = { x: 9, y: 4, result: 36 };
				var answersArray = answerSelector(problem);

				assert.equal(4, answersArray.length);

				utils.bubbleSort(answersArray);

				var i;
				for (i = 0; i < answersArray.length - 1; i++) {
					assert.notEqual(answersArray[i], answersArray[i + 1]);
				}

				for (i = 0; i < answersArray.length; i++) {
					assert.isAbove(answersArray[i], problem.x * 2 - 1);
					assert.isBelow(answersArray[i], problem.x * 9 + 1);
				}
			});
		});
	});
};