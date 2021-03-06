/*global angular*/
(function () {
    'use strict';

    angular.module('EnglishByEinar', ['ionic', 'ngCordova'])

        .run(['$window', '$ionicPlatform', '$rootScope', 'ConceptRepositoryLoader', 'EventBus', function ($window, $ionicPlatform, $rootScope, ConceptRepositoryLoader, EventBus) {
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
                EventBus.publish('Concepts loaded event');

                // force to repaint everything because data has changed
                $rootScope.$apply();
            });
        }]);

}());

