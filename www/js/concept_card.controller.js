/*global angular*/
(function (app) {
    'use strict';

    app.controller('ConceptCardCtrl', ['$scope', 'ConceptMedia', 'ConceptRepository', function ($scope, ConceptMedia, ConceptRepository) {
        var self = this;

        $scope.$on('Concepts loaded event', function () {
            self.next();
        });

        this.play = function () {
            this.media.play();
        };

        this.stop = function () {
            this.media.stop();
        };

        this.next = function () {
            this.concept = ConceptRepository.next();
            this.media = new ConceptMedia(this.concept);
        };

    }]);

}(angular.module('EnglishByEinar')));


