(function() {
    'use strict';
    angular
        .module('app')
        .factory('matchesService', matchesService);
    matchesService.$inject = ['apiService'];
    /* @ngInject */
    function matchesService(apiService) {
        var service = {
            getMatch: getMatch
        };
        var promise;

        return service;
        ////////////////

        function getMatch(date) {
            var result;
            promise = apiService.makeApiCall('assets/json/calendario.json', 'GET', null);
            promise.then(function(response) {
                console.log("getMatch", response);
                response.data.some(function(match, index){
                    if(match.timestamp && match.timestamp <= date) {
                        result = match;
                        return true;
                    }
                });
                console.log("resultado", result);
                return result;
            }, function(error) {
                return error;
            });

            return promise;
        }
    }
})();
