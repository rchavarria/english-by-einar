/*global angular*/
(function (app) {
    'use strict';

    app.factory('ConceptRepository', ['Concept', function (Concept) {
        function Repository() {
            var concepts = [],
                current = 0;

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

        var repo = new Repository(),
            thumbnail,
            image,
            audio;

        // load some initial values
        thumbnail = {
            url: 'img/small-dog.jpg',
            title: 'Dog#1',
            description: 'Wouf! Wouf!'
        };
        image = {
            url: 'img/dog.jpg',
            description: 'Help your kid to say that in English'
        };
        audio = {
            url: '/android_asset/www/audio/some-demo.mp3'
        };
        repo.addConcept(new Concept(thumbnail, image, audio));

        return repo;
    }]);

}(angular.module('EnglishByEinar')));
