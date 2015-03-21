/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptRepositoryLoader', ['ConceptBuilder', 'ConceptRepository', function (ConceptBuilder, ConceptRepository) {
        this.load = function () {
            ConceptRepository.init();

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Dog')
                .withDescription('Wouf! Wouf!')
                .withImage('img/dog.jpg')
                .withAudio('audio/dog.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Egg')
                .withDescription('Small egg')
                .withImage('img/egg.jpg')
                .withAudio('audio/egg.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Hand')
                .withDescription('Give me five')
                .withImage('img/hand.jpg')
                .withAudio('audio/hand.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Shoes')
                .withDescription("Don't forget them")
                .withImage('img/shoes.png')
                .withAudio('audio/shoes.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('T-shirt')
                .withDescription('Wear it!')
                .withImage('img/tshirt.png')
                .withAudio('audio/tshirt.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Hug')
                .withDescription('Give me a hug')
                .withImage('img/hug.png')
                .withAudio('audio/hug.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Mum')
                .withDescription('She loves you')
                .withImage('img/mum.png')
                .withAudio('audio/mum.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Trousers')
                .withDescription('Wear them!')
                .withImage('img/trousers.gif')
                .withAudio('audio/trousers.mp3')
                .build());
        };
    }]);

}(angular.module('EnglishByEinar')));

