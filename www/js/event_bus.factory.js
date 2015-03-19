/*global angular*/
(function (app) {
    'use strict';

    app.factory('EventBus', function () {
        function EventBus() {
            this.subscribers = {};

            this.subscribe = function (eventName, callback) {
                this.subscribers[eventName] = [];
                this.subscribers[eventName].push(callback);
            };
        }

        return new EventBus();
    });

}(angular.module('EnglishByEinar')));


