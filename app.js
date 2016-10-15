'use strict';

angular.module('classActivities', [
    'ui.router',
    'ui.sortable'
]);

angular.module('classActivities').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

angular.module('classActivities').config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$rootScopeProvider',
    function ($stateProvider, $httpProvider, $urlRouterProvider, $rootScopeProvider) {

        $urlRouterProvider.otherwise("landing");

        $stateProvider

            .state('landing', {
                url: '/landing',
                templateUrl: 'components/shared/landing.html',
                controller: '',
                data: {
                    pageTitle: 'Welcome',
                    helpUrl: '',
                    showNav: false,
                    scrollUp: true,
                    authRequired: false
                }
            })

            .state('about', {
                url: '/about',
                templateUrl: 'components/shared/about.html',
                controller: '',
                data: {
                    pageTitle: 'About',
                    helpUrl: '',
                    showNav: false,
                    scrollUp: true,
                    authRequired: false
                }
            })

            .state('math', {
                url: '/math',
                templateUrl: 'components/math/math-landing.html',
                controller: '',
                data: {
                    pageTitle: 'Math',
                    helpUrl: '',
                    showNav: false,
                    scrollUp: true,
                    authRequired: false
                }
            })

            .state('base-ten', {
                url: '/math/base-ten',
                templateUrl: 'components/math/base-ten/base-ten.html',
                controller: 'BaseTenCtrl as vm',
                data: {
                    pageTitle: 'Base Ten',
                    helpUrl: '',
                    showNav: false,
                    scrollUp: true,
                    authRequired: false
                }
            })

            .state('english', {
                url: '/english',
                templateUrl: 'components/english/english-landing.html',
                controller: '',
                data: {
                    pageTitle: 'English',
                    helpUrl: '',
                    showNav: false,
                    scrollUp: true,
                    authRequired: false
                }
            })

            .state('fillTheBlank', {
                url: '/english/fill-the-blank',
                templateUrl: 'components/english/vocabulary/fill-the-blank.html',
                controller: 'VocabCtrl as vm',
                data: {
                    pageTitle: 'Fill In The Blank',
                    helpUrl: '',
                    showNav: false,
                    scrollUp: true,
                    authRequired: false
                }
            })

            .state('partsOfSpeech', {
                url: '/english/parts-of-speech',
                templateUrl: 'components/english/reading/parts-of-speech.html',
                controller: 'ReadingCtrl as vm',
                data: {
                    pageTitle: 'Parts of Speech',
                    helpUrl: '',
                    showNav: false,
                    scrollUp: true,
                    authRequired: false
                }
            })

            .state('science', {
                url: '/science',
                templateUrl: 'components/science/science-landing.html',
                controller: '',
                data: {
                    pageTitle: 'Science',
                    helpUrl: '',
                    showNav: false,
                    scrollUp: true,
                    authRequired: false
                }
            });
        $rootScopeProvider.application = 'classActivities';

    }
]);