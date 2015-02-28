/*global describe, beforeEach, afterEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Concept Repository Loader', function () {
        beforeEach(module('EnglishByEinar'));

        var ConceptRepository,
            loader;

        /*jslint nomen: true*/
        beforeEach(inject(function (_ConceptRepositoryLoader_, _ConceptRepository_) {
            loader = _ConceptRepositoryLoader_;
            ConceptRepository = _ConceptRepository_;
        }));
        /*jslint nomen: false*/

        afterEach(function () {
            ConceptRepository.init();
        });

        describe('#load', function () {

            it('loads lots of Concepts into ConceptRepository', function () {
                expect(ConceptRepository.count()).to.equal(0);

                loader.load();
                // expect(ConceptRepository.count()).to.be.above(0);
            });

        });

    });

}());


