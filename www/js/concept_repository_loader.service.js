/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptRepositoryLoader', ['ConceptBuilder', 'ConceptRepository', function (ConceptBuilder, ConceptRepository) {
        this.load = function () {
            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/small-dog.jpg', 'Dog#1', 'Wouf! Wouf!')
                .withImage('img/dog.jpg', 'Help your kid to say that in English')
                .withAudio('/android_asset/www/audio/some-demo.mp3')
                .build());
        };
    }]);

}(angular.module('EnglishByEinar')));

