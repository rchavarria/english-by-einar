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

        describe('#subscribe', function () {

            it('adds a callback to the subscribers object sorted by event name', function () {
                var eventName = 'some event name';
                EventBus.subscribe(eventName, function () { return; });
                expect(EventBus.subscribers[eventName]).to.have.length(1);
            });

            it('stores more than one callback for the same event', function () {
                expect(1).to.equal(1);
            });

            it('stores callbacks for different events', function () {
                expect(1).to.equal(1);
            });

            it('stores the callback that will be called with #publish', function () {
                var callbackHasBeenCalled = false;
                function callback(callbackArgument) {
                    expect(callbackArgument).to.equal('some argument');
                    callbackHasBeenCalled = true;
                }

                EventBus.subscribe('event#1', callback);
                EventBus.publish('event#1', 'some argument');
                expect(callbackHasBeenCalled).to.equal(true);
            });

        });

    });

}());


