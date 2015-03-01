/*global angular*/
(function (app) {
    'use strict';

    app.controller('ConceptCardCtrl', ['$scope', '$cordovaMedia', 'ConceptRepository', function ($scope, $cordovaMedia, ConceptRepository) {
        var media;

        $scope.word = ConceptRepository.next();

        $scope.play = function (src) {
            if (media) {
                $scope.stop();
            }

            media = $cordovaMedia.newMedia(src);
            media.play();
        };

        $scope.stop = function () {
            if (!media) {
                return;
            }

            media.stop();
            media.release();
        };

        $scope.next = function () {
            $scope.word = ConceptRepository.next();
        };

    }]);

}(angular.module('EnglishByEinar')));


