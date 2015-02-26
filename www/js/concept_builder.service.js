/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptBuilder', ['Concept', function (Concept) {
        this.build = function () {
            return new Concept(null, null, null);
        };
    }]);

}(angular.module('EnglishByEinar')));


