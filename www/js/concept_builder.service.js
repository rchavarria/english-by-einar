/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptBuilder', ['Concept', function (Concept) {
        var image,
            audio,
            title,
            description;

        this.init = function () {
            audio = title = description = undefined;
            return this;
        };

        this.build = function () {
            return new Concept(title, description, image, audio);
        };

        this.withTitle = function (newTitle) {
            title = newTitle;
            return this;
        };

        this.withDescription = function (newDescription) {
            description = newDescription;
            return this;
        };

        this.withImage = function (url) {
            image = {
                url: url
            };

            return this;
        };

        this.withAudio = function (url) {
            var prefix = '/android_asset/www/';
            audio = {
                url: prefix + url
            };

            return this;
        };
    }]);

}(angular.module('EnglishByEinar')));

