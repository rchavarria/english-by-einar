/*global angular*/
(function (app) {
    'use strict';

    app.factory('ConceptMedia', ['$cordovaMedia', function ($cordovaMedia) {

        function ConceptMedia(concept) {
            var media;
            if (concept) {
                media = $cordovaMedia.newMedia(concept.audio.url);
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



