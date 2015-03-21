/*global angular*/
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
                if (!callbacks) {
                    return;
                }

                callbacks[0](callbackArgument);
            };
        }

        return new EventBus();
    });

}(angular.module('EnglishByEinar')));


