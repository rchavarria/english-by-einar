/*global sinon, describe, beforeEach, afterEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Concept Card Controller', function () {
        beforeEach(module('EnglishByEinar'));

        function ConceptMediaConstructor() {
            this.play = sinon.spy();
            this.stop = sinon.spy();
        }

        var ConceptRepositoryLoader,
            controller;

        /*jslint nomen: true*/
        beforeEach(inject(function ($controller, _ConceptRepositoryLoader_) {
            ConceptRepositoryLoader = _ConceptRepositoryLoader_;
            ConceptRepositoryLoader.load();

            controller = $controller('ConceptCardCtrl', { ConceptMedia: ConceptMediaConstructor });
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

            it('creates a media with the concept', function () {
                expect(controller.media).not.to.equal(undefined);
            });

        });

        describe('#next', function () {

            it('loads a new concept', function () {
                var oldConcept = controller.word;
                controller.next();
                expect(controller.word).not.to.deep.equal(oldConcept);
            });

            it('creates a new media', function () {
                var oldMedia = controller.media;
                controller.next();
                expect(controller.media).not.to.deep.equal(oldMedia);
            });

        });

        describe('#play', function () {

            it('invokes ConceptMedia.play() method', function () {
                controller.play();
                expect(controller.media.play).to.have.been.calledWith();
                expect(controller.media.stop).not.to.have.been.calledWith();
            });

        });

        describe('#stop', function () {

            it('invokes ConceptMedia.stop() method', function () {
                controller.stop();
                expect(controller.media.play).not.to.have.been.calledWith();
                expect(controller.media.stop).to.have.been.calledWith();
            });

        });

    });

}());


