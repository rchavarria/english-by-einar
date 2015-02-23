/*global describe, beforeEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('HookUpTestsFactory', function () {
        beforeEach(module('EnglishByEinar'));

        var HookUpTestsFactory;

        /*jslint nomen: true*/
        beforeEach(inject(function (_HookUpTestsFactory_) {
            HookUpTestsFactory = _HookUpTestsFactory_;
        }));
        /*jslint nomen: false*/

        describe('#sumTwoNumbers', function () {

            it('sums a and b', function () {
                var sum = HookUpTestsFactory.sumTwoNumbers(2, 2);
                expect(4).equal(sum);
            });

        });

    });

}());

