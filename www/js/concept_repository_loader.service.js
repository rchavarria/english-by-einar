/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptRepositoryLoader', ['ConceptBuilder', 'ConceptRepository', function (ConceptBuilder, ConceptRepository) {
        this.load = function () {
            var concept = ConceptBuilder.init()
                .withThumbnail('dog', 'dog', 'dog')
                .withImage('dog', 'dog')
                .withAudio('dog')
                .build();

            ConceptRepository.addConcept(concept);
        };
    }]);

}(angular.module('EnglishByEinar')));

