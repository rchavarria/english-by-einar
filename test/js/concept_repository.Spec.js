/*global describe, beforeEach, afterEach, module, inject, it, expect*/
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

        afterEach(function () {
            repo.init();
        });

        describe('Inicialization', function () {

            it('is empty from the beginning', function () {
                var count = repo.count();
                expect(count).to.equal(0);
            });

        });

        describe('#addConcept', function () {

            it('adds a new concept to the repo', function () {
                repo.addConcept(new Concept());
                expect(repo.count()).to.be.above(0);
            });

        });

        describe('#init', function () {

            it('resets all stored concepts', function () {
                repo.addConcept(new Concept());
                repo.init();
                expect(repo.count()).to.equal(0);
            });

        });

        describe('#next', function () {

            it('returns the very next concept in the repo', function () {
                repo.addConcept(new Concept('thumbnail#1'));
                repo.addConcept(new Concept('thumbnail#2'));

                expect(repo.next().thumbnail).to.equal('thumbnail#1');
                expect(repo.next().thumbnail).to.equal('thumbnail#2');
            });

            it('returns concepts from the beginning when all have been returned', function () {
                repo.addConcept(new Concept('thumbnail#1'));
                repo.addConcept(new Concept('thumbnail#2'));
                repo.addConcept(new Concept('thumbnail#3'));

                repo.next();
                repo.next();

                // last concept
                expect(repo.next().thumbnail).to.equal('thumbnail#3');
                // first one
                expect(repo.next().thumbnail).to.equal('thumbnail#1');
            });

        });

    });

}());

