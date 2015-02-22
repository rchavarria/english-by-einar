describe('HookUpTestsFactory', function () {
    beforeEach(module('EnglishByEinar'));

    var HookUpTestsFactory;

    beforeEach(inject(function (_HookUpTestsFactory_) {
        HookUpTestsFactory = _HookUpTestsFactory_;
    }));

    describe('#sumTwoNumbers', function () {

        it('sums a and b', function () {
            var sum = HookUpTestsFactory.sumTwoNumbers(2, 2);
            expect(4).equal(sum);
        });

    });

});
