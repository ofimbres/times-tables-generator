var utils = require('../../app/scripts/times-table-generator/utils');
var assert = require('chai').assert;

module.exports = function() {
	describe('Utils', function() {
		describe('#shuffle()', function () {
			it('should randomize the order of the elements in an array', function () {
				var array = [1,2,3,4,5,6];
				var unsortedArray = utils.shuffle(array.slice());

				assert.notEqual(array, unsortedArray);
				assert.equal(array.length, unsortedArray.length);

				for (var i = 0; i < unsortedArray.length; i++) {
					assert.notEqual(-1, array.indexOf(unsortedArray[i]));
				}

				assert.equal(6, unsortedArray.length);
			});
		});

		describe('#getRandomNumberBetween', function() {
			it('should get a number between 10 and 20 (both inclusive)', function() {
				var r = utils.getRandomNumberBetween(10, 20);
				assert.isAbove(r, 9);
				assert.isBelow(r, 21);
			});

			it('should get a number between 1 and 99 (both inclusive)', function() {
				var r = utils.getRandomNumberBetween(1, 99);
				assert.isAbove(r, 0);
				assert.isBelow(r, 100);
			});

			it('should get the unique number between 5 and 5 (both inclusive)', function() {
				var r = utils.getRandomNumberBetween(5, 5);
				assert.equal(r, 5);
			});
		});

		describe('#reverseNumber', function() {
			it('should get 52 when we inverse the number 25', function() {
				var x = utils.reverseNumber(25);
				assert.equal(x, 52);
				assert.isNotString(x);
			});
		});
	});
};