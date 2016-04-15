'use strict';
(function () {
    /**
     * @ngdoc function
     * @name upStart.controller:LoginCtrl
     * @description
     * # LoginCtrl
     * Backand login control - need to implement in order to get the token for authentication
     */

    angular.module('classActivities')
        .controller('ReadingCtrl', ['$state', '$location', ReadingCtrl]);

    function ReadingCtrl($state, $location) {
        var self = this;
        
        self.testSentence = [
            {
                word: 'Dave',
                type: 'proper noun',
                answer: null
            },
            {
                word: 'jumped',
                type: 'verb',
                answer: null
            },
            {
                word: 'into',
                type: 'preposition',
                answer: null
            },
            {
                word: 'the',
                type: 'article',
                answer: null
            },
            {
                word: 'pool',
                type: 'noun',
                answer: null
            }
        ];
        self.lookingFor = 'preposition';
        self.correctGoal = 0;
        self.getCorrectGoal = function(){
            for (var x in self.testSentence) {
                if (self.testSentence[x].type == self.lookingFor) {
                    self.correctGoal += 1;
                }
            }
        };
        self.getCorrectGoal();
        self.numCorrect = 0;
        self.failedAttempts = 0;
        self.checkAnswer = function(part, type) {
            if (part.type.toLowerCase() == type.toLowerCase()) {
                part.answer = true;
                if (self.numCorrect < self.correctGoal) {
                    self.numCorrect += 1;
                }
            } else {
                part.answer = false;
                self.failedAttempts += 1;
            }
        };
        self.resetAnswers = function () {
            if (self.numCorrect >= self.correctGoal) {
                for (var x in self.testSentence) {
                    self.testSentence[x].answer = null;
                }
                self.numCorrect = 0;
            }
        };
    }


})();