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
                .withImage('img/dog.jpg', 'Help your kid to say that in English')
                .withAudio('audio/dog.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Egg')
                .withDescription('Small egg')
                .withImage('img/egg.jpg', 'Help your kid to say that in English')
                .withAudio('audio/egg.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Hand')
                .withDescription('Give me five')
                .withImage('img/hand.jpg', 'Help your kid to say that in English')
                .withAudio('audio/hand.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Shoes')
                .withDescription("Don't forget them")
                .withImage('img/shoes.png', 'Help your kid to say that in English')
                .withAudio('audio/shoes.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('T-shirt')
                .withDescription('Wear it!')
                .withImage('img/tshirt.png', 'Help your kid to say that in English')
                .withAudio('audio/tshirt.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Hug')
                .withDescription('Give me a hug')
                .withImage('img/hug.png', 'Help your kid to say that in English')
                .withAudio('audio/hug.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Mum')
                .withDescription('She loves you')
                .withImage('img/mum.png', 'Help your kid to say that in English')
                .withAudio('audio/mum.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Trousers')
                .withDescription('Wear them!')
                .withImage('img/trousers.png', 'Help your kid to say that in English')
                .withAudio('audio/trousers.mp3')
                .build());
        };
    }]);

}(angular.module('EnglishByEinar')));

