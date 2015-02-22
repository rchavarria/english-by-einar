describe('HookUpTestsFactory', function () {
    beforeEach(module('playSound'));

    var HookUpTestsFactory;

    beforeEach(inject(function (_HookUpTestsFactory_) {
        HookUpTestsFactory = _HookUpTestsFactory_;
    }));

    it('hooks up AngularJS factories', function () {
        expect(HookUpTestsFactory).not.to.be.undefined;
    });

    describe('#sumTwoNumbers', function () {

        it('sums a and b', function () {
            var sum = HookUpTestsFactory.sumTwoNumbers(2, 2);
            expect(4).equal(sum);
        });

    });

});
