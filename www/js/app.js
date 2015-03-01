/*global angular*/
(function () {
    'use strict';

    angular.module('EnglishByEinar', ['ionic', 'ngCordova'])

        .run(['$window', '$ionicPlatform', 'ConceptRepositoryLoader', function ($window, $ionicPlatform, ConceptRepositoryLoader) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if ($window.cordova && $window.cordova.plugins.Keyboard) {
                    $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if ($window.StatusBar) {
                    $window.StatusBar.styleDefault();
                }

                ConceptRepositoryLoader.load();
            });
        }])

        .controller('ConceptCardCtrl', ['$scope', '$cordovaMedia', 'ConceptRepository', function ($scope, $cordovaMedia, ConceptRepository) {
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

}());

