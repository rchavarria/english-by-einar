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
                var callbacks = this.subscribers[eventName];
                lodash.each(callbacks, function (callback) {
                    callback(callbackArgument);
                });
            };
        }

        return new EventBus();
    });

}(angular.module('EnglishByEinar')));


