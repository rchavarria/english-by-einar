/*global angular*/
(function (app) {
    'use strict';

    app.controller('ConceptCardCtrl', ['$cordovaMedia', 'ConceptRepository', function ($cordovaMedia, ConceptRepository) {
        var media;

        this.word = ConceptRepository.next();

        this.play = function (src) {
            if (media) {
                this.stop();
            }

            media = $cordovaMedia.newMedia(src);
            media.play();
        };

        this.stop = function () {
            if (!media) {
                return;
            }

            media.stop();
            media.release();
        };

        this.next = function () {
            this.word = ConceptRepository.next();
        };

    }]);

}(angular.module('EnglishByEinar')));


