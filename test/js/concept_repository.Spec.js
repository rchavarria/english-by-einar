/*global describe, beforeEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Concept Repository', function () {
        beforeEach(module('EnglishByEinar'));

        var Concept,
            repo;

        /*jslint nomen: true*/
        beforeEach(inject(function (_Concept_, _ConceptRepository_) {
            Concept = _Concept_;
            repo = _ConceptRepository_;
        }));
        /*jslint nomen: false*/

        describe('Inicialization', function () {

            it('contains some concepts from the beginning', function () {
                var count = repo.count();
                expect(count).to.be.above(0);
            });

        });

        describe('#addConcept', function () {

            it('adds a new concept to the repo', function () {
                var irrelevantObject = {};
                repo.addConcept(new Concept(irrelevantObject, irrelevantObject, irrelevantObject));
                expect(repo.count()).to.be.above(1);
            });

        });

    });

}());

