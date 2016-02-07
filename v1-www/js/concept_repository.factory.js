/*global angular*/
(function (app) {
    'use strict';

    app.factory('ConceptRepository', [function () {
        function Repository() {
            var concepts = [],
                current = 0;

            this.init = function () {
                concepts = [];
                current = 0;
            };

            this.addConcept = function (concept) {
                concepts.push(concept);
            };

            this.count = function () {
                return concepts.length;
            };

            this.next = function () {
                var concept = concepts[current];
                current = (current + 1) % concepts.length;
                return concept;
            };
        }

        return new Repository();
    }]);

}(angular.module('EnglishByEinar')));
