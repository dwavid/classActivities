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
        .controller('VocabCtrl', ['$state', '$location', VocabCtrl]);

    function VocabCtrl($state, $location) {
        var self = this;

        self.currentProblem = 0;

        self.sentences = [
            {
                partOne: 'The dog ',
                partTwo: ' over the fence.',
                choices: [
                    'jump',
                    'jumping',
                    'jumped'
                ],
                answer: 'jumped'
            },
            {
                partOne: 'The chef ',
                partTwo: ' a big pot roast.',
                choices: [
                    'cooked',
                    'cook',
                    'cooking'
                ],
                answer: 'cooked'
            },
            {
                partOne: 'Bald eagles can ',
                partTwo: ' really high.',
                choices: [
                    'flew',
                    'fly',
                    'flying'
                ],
                answer: 'fly'
            },
            {
                partOne: 'Dave was ',
                partTwo: ' his bicycle.',
                choices: [
                    'rode',
                    'ride',
                    'riding'
                ],
                answer: 'riding'
            },
            {
                partOne: 'The fireman ',
                partTwo: ' the kitten from the tree.',
                choices: [
                    'save',
                    'saving',
                    'saved'
                ],
                answer: 'saved'
            }
        ];
        
        self.answer = null;

        self.failedAttempts = 0;

        // self.correctAnswer = self.vocabWords[2];
        
        self.checkAnswer = function(answer, sentence){
            self.answer = answer;
            if (answer == sentence.answer) {
                self.moveOn = true;
            } else {
                self.moveOn = false;
                self.failedAttempts += 1;
            }
        };

        self.next = function () {
            if (self.currentProblem < (self.sentences.length - 1)) {
                self.currentProblem += 1;
                self.answer = null;
                self.moveOn = false;
            }
        };
    }


})();