/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptRepositoryLoader', ['ConceptBuilder', 'ConceptRepository', function (ConceptBuilder, ConceptRepository) {
        this.load = function () {
            var concept = ConceptBuilder.init()
                .withThumbnail('img/small-dog.jpg', 'Dog#1', 'Wouf! Wouf!')
                .withImage('img/dog.jpg', 'Help your kid to say that in English')
                .withAudio('/android_asset/www/audio/some-demo.mp3')
                .build();

            ConceptRepository.addConcept(concept);
        };
    }]);

}(angular.module('EnglishByEinar')));

