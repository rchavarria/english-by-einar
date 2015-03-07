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

        describe('#withThumbnail', function () {

            it('sets thumbnail properties to a Concept', function () {
                var concept = builder
                    .withThumbnail('some url', 'some title', 'some description')
                    .build();

                expect(concept.thumbnail.url).to.equal('some url');
                expect(concept.thumbnail.title).to.equal('some title');
                expect(concept.thumbnail.description).to.equal('some description');
            });

        });

        describe('#withImage', function () {

            it('sets image properties to a Concept', function () {
                var concept = builder
                    .withImage('some url', 'some description')
                    .build();

                expect(concept.image.url).to.equal('some url');
                expect(concept.image.description).to.equal('some description');
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
                    .withThumbnail('', '', '')
                    .withImage('', '')
                    .withAudio('')
                    .build();

                // build the concept starting with init()
                concept = builder
                    .init()
                    .withThumbnail('', '', '')
                    .build();

                expect(concept.thumbnail).not.to.equal(undefined);
                expect(concept.image).to.equal(undefined);
                expect(concept.audio).to.equal(undefined);
            });

        });

    });

}());

