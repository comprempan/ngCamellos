(function() {
    'use strict';
    angular
        .module('app')
        .factory('apiService', apiService);
    apiService.$inject = ['$http', '$q', '$rootScope', 'cmConfig', 'routerService', '$localStorage'];
    /* @ngInject */
    function apiService($http, $q, $rootScope, cmConfig, routerService, $localStorage) {
        var service = {
            makeApiCall: makeApiCall
        };
        var promise;

        return service;
        ////////////////

        /**
         * @description - method that throws a request to the API
         * @param  {string} url              the url of the API
         * @param  {string} method           the metod of the request
         * @param  {string} data             data neccessary in the request
         * @return {object}                  return a promise with the api response
         */
        function makeApiCall(url, method, data) {
            //var token = authService.getCredentials();
            //var user = authService.getUserData();

            var request = {
                url: url,
                method: method,
                headers: {
                    'Content-Type': cmConfig.content_type
                },
                data: (data !== null) ? data : ''
            };

            var promise = $http(request);
            promise.then(function (response) {
                return response.data;
            }, function (error) {
               /*
                if (error.status === 401) {
                    authService.clearCredentials();
                    routerService.goTo('login');
                } else if (error.status === 404) {
                    //vm.redirectTo404();
                } else if (error.status === 500) {
                    routerService.goTo("logos.error500");
                }*/
                return error.data;
            });
            return promise;
        }
    }
})();
