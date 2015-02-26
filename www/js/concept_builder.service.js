/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptBuilder', ['Concept', function (Concept) {
        var thumbnail,
            image;

        this.build = function () {
            return new Concept(thumbnail, image, null);
        };

        this.withThumbnail = function (url, title, description) {
            thumbnail = {
                url: url,
                title: title,
                description: description
            };

            return this;
        };

        this.withImage = function (url, description) {
            image = {
                url: url,
                description: description
            };

            return this;
        };
    }]);

}(angular.module('EnglishByEinar')));


