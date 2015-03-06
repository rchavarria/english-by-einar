/*global angular*/
(function () {
    'use strict';

    angular.module('EnglishByEinar', ['ionic', 'ngCordova'])

        .run(['$window', '$rootScope', '$ionicPlatform', 'ConceptRepositoryLoader', function ($window, $rootScope, $ionicPlatform, ConceptRepositoryLoader) {
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

                $rootScope.$broadcast('Concepts loaded event');
            });
        }]);

}());

