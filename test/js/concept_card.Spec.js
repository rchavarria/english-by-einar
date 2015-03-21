/*global sinon, describe, beforeEach, afterEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Concept Card Controller', function () {
        beforeEach(module('EnglishByEinar'));

        function ConceptMediaConstructor() {
            this.play = sinon.spy();
            this.stop = sinon.spy();
        }

        var $rootScope,
            ConceptRepositoryLoader,
            EventBus,
            controller;

        /*jslint nomen: true*/
        beforeEach(inject(function ($controller, _$rootScope_, _ConceptRepositoryLoader_, _EventBus_) {
            $rootScope = _$rootScope_;

            EventBus = _EventBus_;

            ConceptRepositoryLoader = _ConceptRepositoryLoader_;
            ConceptRepositoryLoader.load();

            controller = $controller('ConceptCardCtrl', {
                $scope: $rootScope.$new(),
                ConceptMedia: ConceptMediaConstructor
            });
        }));
        /*jslint nomen: false*/

        describe('Inicialization', function () {

            it('is not null', function () {
                expect(controller).not.to.equal(null);
                expect(controller).not.to.equal(undefined);
            });

            it('does not load a concept', function () {
                expect(controller.concept).to.equal(undefined);
            });

            it('does not create a media with the concept', function () {
                expect(controller.media).to.equal(undefined);
            });

        });

        describe('Concepts loaded event', function () {

            it('loads the first concept when is broadcasted', function () {
                expect(controller.concept).to.equal(undefined);

                $rootScope.$broadcast('Concepts loaded event');
                expect(controller.concept).not.to.equal(undefined);
            });

            it('loads the first concept when is published through the EventBus', function () {
                expect(controller.concept).to.equal(undefined);

                EventBus.publish('Concepts loaded event');
                expect(controller.concept).not.to.equal(undefined);
            });

        });

        describe('#next', function () {

            it('loads a new concept', function () {
                var oldConcept = controller.concept;
                controller.next();
                expect(controller.concept).not.to.deep.equal(oldConcept);
            });

            it('creates a new media', function () {
                var oldMedia = controller.media;
                controller.next();
                expect(controller.media).not.to.deep.equal(oldMedia);
            });

        });

        describe('#play', function () {

            beforeEach(function () {
                $rootScope.$broadcast('Concepts loaded event');
            });

            it('invokes ConceptMedia.play() method', function () {
                controller.play();
                expect(controller.media.play).to.have.been.calledWith();
                expect(controller.media.stop).not.to.have.been.calledWith();
            });

        });

        describe('#stop', function () {

            beforeEach(function () {
                $rootScope.$broadcast('Concepts loaded event');
            });

            it('invokes ConceptMedia.stop() method', function () {
                controller.stop();
                expect(controller.media.play).not.to.have.been.calledWith();
                expect(controller.media.stop).to.have.been.calledWith();
            });

        });

    });

}());


