/*global angular*/
(function (app) {
    'use strict';

    app.controller('ConceptCardCtrl', ['ConceptMedia', 'ConceptRepository', function (ConceptMedia, ConceptRepository) {
        var media;

        this.word = ConceptRepository.next();
        media = new ConceptMedia(this.word);

        this.play = function () {
            media.play();
        };

        this.stop = function () {
            media.stop();
        };

        this.next = function () {
            this.word = ConceptRepository.next();
            media = new ConceptMedia(this.word);
        };

    }]);

}(angular.module('EnglishByEinar')));


