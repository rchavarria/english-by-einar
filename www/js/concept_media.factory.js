/*global angular, console*/
(function (app) {
    'use strict';

    app.factory('ConceptMedia', ['$cordovaMedia', function ($cordovaMedia) {

        function ConceptMedia(concept) {
            var media;
            if (concept) {
                try {
                    media = $cordovaMedia.newMedia(concept.audio.url);
                } catch (e) {
                    console.log('Error creating media with url: ', concept.audio.url);
                }
            }

            this.play = function () {
                if (!media) {
                    return;
                }

                this.stop();
                media.play();
            };

            this.stop = function () {
                if (!media) {
                    return;
                }

                media.stop();
                media.release();
            };
        }

        return ConceptMedia;
    }]);

}(angular.module('EnglishByEinar')));

