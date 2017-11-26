(function() {
    'use strict';

    angular.module('app', ['cm.config', 'ui.router', 'ngStorage', 'ngAnimate'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("cm", {
                    abstract: true,
                    url: "/cm",
                    templateUrl: "app/home/home.html"
                })
                .state('cm.home', {
                    url: '^/',
                    templateUrl: 'app/home/home-content.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    resolve: {
                        onEnter: function() {
                            var body = document.body;
                            body.id = 'cm';
                            document.documentElement.id = "cmHomeHtml";
                        }
                    }
                })
                .state('cm.resultados', {
                    url: '^/resultados',
                    templateUrl: 'app/home/home-content.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    resolve: {
                        onEnter: function() {
                            var body = document.body;
                            body.id = 'cm';
                            document.documentElement.id = "cmHomeHtml";
                        }
                    }
                })
                .state('cm.calendario', {
                    url: '^/calendario',
                    templateUrl: 'app/home/home-content.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    resolve: {
                        onEnter: function() {
                            var body = document.body;
                            body.id = 'cm';
                            document.documentElement.id = "cmHomeHtml";
                        }
                    }
                })
                .state('cm.clasificacion', {
                    url: '^/clasificacion',
                    templateUrl: 'app/home/home-content.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    resolve: {
                        onEnter: function() {
                            var body = document.body;
                            body.id = 'cm';
                            document.documentElement.id = "cmHomeHtml";
                        }
                    }
                });
                /*.state('logos.reportsLibrary', {
                    url: '^/reports-library',
                    templateUrl: 'app/reportsLibrary/reports-library.html',
                    controller: 'ReportsLibraryController',
                    controllerAs: 'vm',
                    params: {
                        unitsIds: null, //param to send to reportsList the array of user unit ids
                    },
                    ncyBreadcrumb: {
                        label: 'Library of Reports'
                    }
                })
                .state('logos.reportsLibrary.reportsList', {
                    url: '^/reports-list/:unitId',
                    views: {
                        "@logos": {
                            templateUrl: 'app/reportsLibrary/reportsList/reports-list.html',
                            controller: 'ReportsListController',
                            controllerAs: 'rlCtrl',
                        }
                    },
                    ncyBreadcrumb: {
                        label: '{{unitName}}'
                    }
                })*/
        });

})();
