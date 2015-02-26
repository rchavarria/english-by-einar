/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptBuilder', ['Concept', function (Concept) {
        var thumbnail;

        this.build = function () {
            return new Concept(thumbnail, null, null);
        };

        this.withThumbnail = function (url, title, description) {
            thumbnail = {
                url: url,
                title: title,
                description: description
            };

            return this;
        };
    }]);

}(angular.module('EnglishByEinar')));


