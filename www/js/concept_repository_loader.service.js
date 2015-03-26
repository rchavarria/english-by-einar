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

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Duck')
                .withDescription('Cuak! Cuak!')
                .withImage('img/duck.png')
                .withAudio('audio/duck.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Jump')
                .withDescription('Jump to the moon')
                .withImage('img/jump.png')
                .withAudio('audio/jump.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Nut')
                .withDescription('Nuts make squirrels strong')
                .withImage('img/nut.png')
                .withAudio('audio/nut.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Sun')
                .withDescription('You are brighter than the sun')
                .withImage('img/sun.png')
                .withAudio('audio/sun.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withTitle('Ant')
                .withDescription('Ants are awesome')
                .withImage('img/ant.png')
                .withAudio('audio/ant.mp3')
                .build());
        };
    }]);

}(angular.module('EnglishByEinar')));

