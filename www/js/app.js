/*global angular*/
(function () {
    'use strict';

    angular.module('EnglishByEinar', ['ionic', 'ngCordova'])

        .run(function ($window, $ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if ($window.cordova && $window.cordova.plugins.Keyboard) {
                    $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if ($window.StatusBar) {
                    $window.StatusBar.styleDefault();
                }
            });
        })

        .controller('ConceptCardCtrl', function ($scope, $cordovaMedia, Vocabulary) {
            var media;

            $scope.word = Vocabulary.next();

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
                $scope.word = Vocabulary.next();
            };

        })

        .factory('Vocabulary', function () {
            var current = 0,
                words = [];

            words.push({
                thumbnail: 'img/small-dog.jpg',
                thumbnailTitle: 'Dog#1',
                thumbnailDescription: 'Wouf! Wouf!',
                image: 'img/dog.jpg',
                imageDescription: 'Help your kid to say that in English',
                audio: '/android_asset/www/audio/some-demo.mp3'
            });
            words.push({
                thumbnail: 'img/small-dog.jpg',
                thumbnailTitle: 'Dog#2',
                thumbnailDescription: 'Wouf! Wouf!',
                image: 'img/dog.jpg',
                imageDescription: 'Help your kid to say that in English',
                audio: '/android_asset/www/audio/some-demo.mp3'
            });
            words.push({
                thumbnail: 'img/small-dog.jpg',
                thumbnailTitle: 'Dog#3',
                thumbnailDescription: 'Wouf! Wouf!',
                image: 'img/dog.jpg',
                imageDescription: 'Help your kid to say that in English',
                audio: '/android_asset/www/audio/some-demo.mp3'
            });

            return {
                next: function () {
                    var word = words[current];
                    current = (current + 1) % words.length;
                    return word;
                }
            };
        });

}());

