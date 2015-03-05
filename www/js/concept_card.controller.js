/*global angular*/
(function (app) {
    'use strict';

    app.controller('ConceptCardCtrl', ['ConceptMedia', 'ConceptRepository', function (ConceptMedia, ConceptRepository) {
        this.word = ConceptRepository.next();
        this.media = new ConceptMedia(this.word);

        this.play = function () {
            this.media.play();
        };

        this.stop = function () {
            this.media.stop();
        };

        this.next = function () {
            this.word = ConceptRepository.next();
            this.media = new ConceptMedia(this.word);
        };

    }]);

}(angular.module('EnglishByEinar')));


