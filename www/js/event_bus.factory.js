/*global angular, lodash, console*/
(function (app) {
    'use strict';

    app.factory('EventBus', function () {
        function EventBus() {
            this.subscribers = {};

            this.subscribe = function (eventName, callback) {
                this.subscribers[eventName] = this.subscribers[eventName] || [];
                this.subscribers[eventName].push(callback);
            };

            this.publish = function (eventName, callbackArgument) {
                var i,
                    callbacks = this.subscribers[eventName];
                if (!callbacks) {
                    return;
                }

                lodash.each(callbacks, function (c) {
                    console.log(c);
                });

                for (i = 0; i < callbacks.length; i += 1) {
                    callbacks[i](callbackArgument);
                }
            };
        }

        return new EventBus();
    });

}(angular.module('EnglishByEinar')));


