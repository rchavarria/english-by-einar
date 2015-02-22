(function () {
    'use strict';

    angular.module('playSound')
        .factory('HookUpTestsFactory', [function () {
            function HookUpTestsFactory() {
                this.sumTwoNumbers = function (a, b) {
                    return a + b;
                }
            }

            return new HookUpTestsFactory();
        }]);

}());
