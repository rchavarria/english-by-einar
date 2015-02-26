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

    });

}());


