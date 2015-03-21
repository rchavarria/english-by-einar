/*global describe, beforeEach, afterEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Concept Builder', function () {
        beforeEach(module('EnglishByEinar'));

        var Concept,
            builder;

        /*jslint nomen: true*/
        beforeEach(inject(function (_Concept_, _ConceptBuilder_) {
            Concept = _Concept_;
            builder = _ConceptBuilder_;
        }));
        /*jslint nomen: false*/

        describe('Inicialization', function () {

            it('is not null', function () {
                expect(builder).not.to.equal(null);
                expect(builder).not.to.equal(undefined);
            });

        });

        describe('#build', function () {

            it('creates a Concept object', function () {
                var concept = builder.build();
                expect(concept).to.be.an.instanceof(Concept);
            });

        });

        describe('#withTitle', function () {

            it('sets Concept title', function () {
                var concept = builder
                    .withTitle('some title')
                    .build();

                expect(concept.title).to.equal('some title');
            });

        });

        describe('#withDescription', function () {

            it('sets Concept description', function () {
                var concept = builder
                    .withDescription('some description')
                    .build();

                expect(concept.description).to.equal('some description');
            });

        });

        describe('#withImage', function () {

            it('sets image properties to a Concept', function () {
                var concept = builder
                    .withImage('some url')
                    .build();

                expect(concept.image.url).to.equal('some url');
            });

        });

        describe('#withAudio', function () {

            it('sets audio properties to a Concept', function () {
                var concept = builder
                    .withAudio('some url')
                    .build();

                expect(concept.audio.url).not.to.equal(undefined);
            });

            it('prefixes a URL with /android_asset/www/ for android platforms', function () {
                var concept = builder
                    .withAudio('some url')
                    .build();

                expect(concept.audio.url).to.contain('/android_asset/www/');
            });

        });

        describe('#init', function () {

            it('resets all Concept cached properties', function () {
                var concept = builder
                    .withTitle('')
                    .withDescription('')
                    .withImage('')
                    .withAudio('')
                    .build();

                // build the concept starting with init()
                concept = builder
                    .init()
                    .withImage('')
                    .build();

                expect(concept.image).not.to.equal(undefined);
                expect(concept.title).to.equal(undefined);
                expect(concept.description).to.equal(undefined);
                expect(concept.audio).to.equal(undefined);
            });

        });

    });

}());

