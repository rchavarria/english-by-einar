/*global describe, beforeEach, afterEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Event Bus', function () {
        beforeEach(module('EnglishByEinar'));

        var EventBus;

        /*jslint nomen: true*/
        beforeEach(inject(function (_EventBus_) {
            EventBus = _EventBus_;
        }));
        /*jslint nomen: false*/

        describe('Inicialization', function () {

            it('is not null', function () {
                expect(EventBus).not.to.equal(null);
                expect(EventBus).not.to.equal(undefined);
            });

        });

    });

}());


