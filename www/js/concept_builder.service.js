/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptBuilder', ['Concept', function (Concept) {
        var thumbnail,
            image,
            audio;

        this.init = function () {
            thumbnail = image = audio = undefined;
            return this;
        };

        this.build = function () {
            return new Concept(thumbnail, image, audio);
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

        this.withAudio = function (url) {
            var prefix = '/android_assert/www/';
            audio = {
                url: prefix + url
            };

            return this;
        };
    }]);

}(angular.module('EnglishByEinar')));


