/*global angular*/
(function (app) {
    'use strict';

    app.controller('ConceptCardCtrl', ['ConceptMedia', 'ConceptRepository', 'EventBus', function (ConceptMedia, ConceptRepository, EventBus) {
        var self = this;

        EventBus.subscribe('Concepts loaded event', function () {
            self.next();
        });

        this.play = function () {
            this.media.play();
        };

        this.stop = function () {
            this.media.stop();
        };

        this.next = function () {
            this.concept = ConceptRepository.next();
            this.media = new ConceptMedia(this.concept);
        };

    }]);

}(angular.module('EnglishByEinar')));


