/*global describe, beforeEach, afterEach, module, inject, it, expect*/
(function () {
    'use strict';

    describe('Concept Builder', function () {
        beforeEach(module('EnglishByEinar'));

        var builder;

        /*jslint nomen: true*/
        beforeEach(inject(function (_ConceptBuilder_) {
            builder = _ConceptBuilder_;
        }));
        /*jslint nomen: false*/

        describe('Inicialization', function () {

            it('is not null', function () {
                expect(builder).not.to.equal(null);
                expect(builder).not.to.equal(undefined);
            });

        });

    });

}());


