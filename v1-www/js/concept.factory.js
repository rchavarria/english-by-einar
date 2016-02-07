/*global angular*/
(function (app) {
    'use strict';

    app.factory('Concept', function () {
        function Concept(title, description, image, audio) {
            this.title = title;
            this.description = description;
            this.image = image;
            this.audio = audio;
        }

        // return the function itself to be used as a constructor
        return Concept;
    });

}(angular.module('EnglishByEinar')));

