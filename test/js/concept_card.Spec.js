/*global describe, beforeEach, afterEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Concept Card Controller', function () {
        beforeEach(module('EnglishByEinar'));

        var ConceptRepositoryLoader,
            controller;

        /*jslint nomen: true*/
        beforeEach(inject(function ($controller, _ConceptRepositoryLoader_) {
            ConceptRepositoryLoader = _ConceptRepositoryLoader_;
            ConceptRepositoryLoader.load();

            var ConceptMedia = function () {
                this.foo = 'bar';
            };

            controller = $controller('ConceptCardCtrl', { ConceptMedia: ConceptMedia });
        }));
        /*jslint nomen: false*/

        describe('Inicialization', function () {

            it('is not null', function () {
                expect(controller).not.to.equal(null);
                expect(controller).not.to.equal(undefined);
            });

            it('loads a concept', function () {
                expect(controller.word).not.to.equal(undefined);
            });

        });

        describe('#next', function () {

            it('loads a new concept', function () {
                var oldConcept = controller.word;
                controller.next();
                expect(controller.word).not.to.deep.equal(oldConcept);
            });

        });

    });

}());


