(function () {

    angular.module('rackBoot', [
            'ui.router',
            'ui.bootstrap'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('/', {
                    views: {
                        'header': {
                            templateUrl: 'partials/header/header.html',
                            controller: 'headerCtrl'
                        },
                        'topNav': {
                            templateUrl: 'partials/topNav/topNav.html',
                            controller: 'topNavCtrl'
                        },
                        'liveChat': {
                            templateUrl: 'partials/liveChat/liveChat.html',
                            controller: 'liveChatCtrl'
                        },
                        'heroImage': {
                            templateUrl: 'partials/heroImage/heroImage.html',
                            controller: 'heroImageCtrl'
                        },
                        'hosting': {
                            templateUrl: 'partials/hosting/hosting.html',
                            controller: 'hostingCtrl'
                        },
                        'itSolutions': {
                            templateUrl: 'partials/itSolutions/itSolutions.html',
                            controller: 'itSolutionsCtrl'
                        },
                        'leadForm': {
                            templateUrl: 'partials/leadForm/leadForm.html',
                            controller: 'leadFormCtrl'
                        },
                        'rackspaceSolve': {
                            templateUrl: 'partials/rackspaceSolve/rackspaceSolve.html',
                            controller: 'rackspaceSolveCtrl'
                        },
                        'newsEvents': {
                            templateUrl: 'partials/newsEvents/newsEvents.html',
                            controller: 'newsEventsCtrl'
                        },
                        'footer': {
                            templateUrl: 'partials/footer/footer.html',
                            controller: 'footerCtrl'
                        }
                    },
                    url: '/'
                });
        });
})();