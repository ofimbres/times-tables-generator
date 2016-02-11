var levels = require('../../app/levels');
var assert = require('chai').assert;

module.exports = function() {
	describe('Levels', function() {
		describe('#uniqueFacts()', function () {
			it('should return an array containing only 10 elements', function () {
        var problemArray = levels.uniqueFacts(10);

        assert.isArray(problemArray);
				assert.equal(10, problemArray.length);
			});
		});
  });
};
