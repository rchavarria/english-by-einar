/*global angular*/
(function (app) {
    'use strict';

    app.controller('ConceptCardCtrl', ['ConceptMedia', 'ConceptRepository', function (ConceptMedia, ConceptRepository) {
        this.concept = ConceptRepository.next();
        this.media = new ConceptMedia(this.concept);

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


