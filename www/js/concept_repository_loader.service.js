/*global angular*/
(function (app) {
    'use strict';

    app.service('ConceptRepositoryLoader', ['ConceptBuilder', 'ConceptRepository', function (ConceptBuilder, ConceptRepository) {
        this.load = function () {
            ConceptRepository.init();

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/small-dog.jpg', 'Dog', 'Wouf! Wouf!')
                .withImage('img/dog.jpg', 'Help your kid to say that in English')
                .withAudio('audio/dog.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/egg.jpg', 'Egg', 'Small egg')
                .withImage('img/egg.jpg', 'Help your kid to say that in English')
                .withAudio('audio/egg.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/hand.jpg', 'Hand', 'Give me five')
                .withImage('img/hand.jpg', 'Help your kid to say that in English')
                .withAudio('audio/hand.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/shoes.png', 'Shoes', "Don't forget them")
                .withImage('img/shoes.png', 'Help your kid to say that in English')
                .withAudio('audio/shoes.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/tshirt.png', 'T-shirt', 'Wear it!')
                .withImage('img/tshirt.png', 'Help your kid to say that in English')
                .withAudio('audio/tshirt.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/hug.png', 'Hug', 'Give me a hug')
                .withImage('img/hug.png', 'Help your kid to say that in English')
                .withAudio('audio/hug.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/mum.png', 'Mum', 'She loves you')
                .withImage('img/mum.png', 'Help your kid to say that in English')
                .withAudio('audio/mum.mp3')
                .build());

            ConceptRepository.addConcept(ConceptBuilder
                .init()
                .withThumbnail('img/trousers.png', 'Trousers', 'Wear it!')
                .withImage('img/trousers.png', 'Help your kid to say that in English')
                .withAudio('audio/trousers.mp3')
                .build());
        };
    }]);

}(angular.module('EnglishByEinar')));

