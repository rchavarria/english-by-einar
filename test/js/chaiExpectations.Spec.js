/*global describe, beforeEach, afterEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Chai Expectations', function () {

        describe('Not to be null', function () {

            it('is not null', function () {
                var notNull = 'foo';
                expect(notNull).not.to.equal(null);
            });

        });

    });

}());


