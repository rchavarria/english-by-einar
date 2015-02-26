/*global angular*/
(function (app) {
    'use strict';

    app.factory('ConceptBuilder', ['Concept', function (Concept) {
        function ConceptBuilder() {
            this.build = function () {
                return new Concept(null, null, null);
            };
        }

        return new ConceptBuilder();
    }]);

}(angular.module('EnglishByEinar')));


