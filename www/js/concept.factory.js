/*global angular*/
(function (app) {
    'use strict';

    app.factory('Concept', function () {
        function Concept(thumbnail, image, audio, title) {
            this.title = title;
            this.thumbnail = thumbnail;
            this.image = image;
            this.audio = audio;
        }

        // return the function itself to be used as a constructor
        return Concept;
    });

}(angular.module('EnglishByEinar')));

