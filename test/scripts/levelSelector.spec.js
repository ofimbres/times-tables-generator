var levelSelector = require('../../app/levelSelector');
var assert = require('chai').assert;

module.exports = function() {
	describe('Times Table Generator', function() {
		describe('#levelSelector()', function () {
			it('should return an array if the key matches with all levels', function () {
				assert.isDefined(levelSelector('uniqueFacts', 10));
				/*assert.isDefined(levelSelector('easy', 10));
				assert.isDefined(levelSelector('normal', 10));
				assert.isDefined(levelSelector('hard', 10));*/
			});

      it('should throw an exception if the key doesn\'t with any level', function () {
				assert.throws(function() {
          levelSelector('fooBar', 10);
        });
			});
		});
	});
};
