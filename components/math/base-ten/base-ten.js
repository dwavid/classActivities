/**
 * Created by dross on 10/14/16.
 */
'use strict';
(function () {

    angular.module('classActivities')
        .controller('BaseTenCtrl', ['$state', '$location', BaseTenCtrl]);

    function BaseTenCtrl($state, $location) {
        var self = this;
        self.badNumError = false;
        self.qNumber = null;
        self.qCopy = null;
        self.hundreds = null;
        self.hundredsArray = [];
        self.tens = null;
        self.tensArray = [];
        self.ones = null;
        self.onesArray = [];
        self.correctAnswer = null;
        self.wrong1 = null;
        self.wrong2 = null;

        self.setQNumber = function(goalNum, startNum, endNum) {
            if (angular.isUndefined(goalNum) || goalNum == null && (startNum == null || endNum == null)) {
                self.badNumError = true;
                self.qNumber = null;
                self.qCopy = null;
            } else {
                self.badNumError = false;
                if (goalNum == null) {
                    self.qNumber = Math.floor(Math.random() * ((endNum - startNum) + 1) + startNum);
                }
                self.qCopy = angular.copy(self.qNumber);
                self.hundreds = null;
                self.hundredsArray = [];
                self.tens = null;
                self.tensArray = [];
                self.ones = null;
                self.onesArray = [];
                self.hundreds = Math.floor((self.qNumber % 1000) / 100);
                for (var a = 0; a < self.hundreds; a++) {
                    self.hundredsArray.push(a);
                }
                self.tens = Math.floor((self.qNumber % 100) / 10);
                for (var b = 0; b < self.tens; b++) {
                    self.tensArray.push(b);
                }
                self.ones = self.qNumber % 10;
                for (var c = 0; c < self.ones; c++) {
                    self.onesArray.push(c);
                }
            }
        };
    }


})();