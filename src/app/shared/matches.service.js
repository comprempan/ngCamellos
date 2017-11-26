(function() {
    'use strict';
    angular
        .module('app')
        .factory('matchesService', matchesService);

    /* @ngInject */
    function matchesService($http, $q, apiService) {
        var service = {
            getPreviousMatch: getPreviousMatch,
            getNextMatch: getNextMatch,
            getMatch: getMatch
        };
        var promise;
        var matchDate = null;
        //var deferred = $q.defer();

        return service;
        ////////////////

        function getMatch(date) {
            var result;
            var matchDate;
            var deferred = $q.defer();
            getCalendar().then(function(response){
                response.data.some(function(match, index) {
                    matchDate = moment.unix(match.timestamp).format();
                    if(matchDate === date) {
                        result = match;
                        return true;
                    }
                });
                deferred.resolve(result);
            });

            result = deferred.promise;
            return $q.when(result);
        }

        function getPreviousMatch(currentDate) {
            var result;
            var matchDate;
            var deferred = $q.defer();
            getCalendar().then(function(response) {
                response.data.reverse();
                response.data.some(function(match, index) {
                    matchDate = new Date(match.fecha);
                   
                    if(matchDate <= currentDate) {
                        result = match;
                        return true;
                    }
                });
                deferred.resolve(result);
            });

            result = deferred.promise;
            return $q.when(result);
        }

        function getNextMatch(currentDate) {
            var result;
            var matchDate;
            var deferred = $q.defer();
            getCalendar().then(function(response){
                response.data.some(function(match, index) {
                    matchDate = new Date(match.fecha);
                    if(matchDate > currentDate) {
                        result = match;
                        return true;
                    }
                });
                deferred.resolve(result);
            });

            result = deferred.promise;
            return $q.when(result);
        }

        function getCalendar() {
            return $http.get('assets/json/calendario.json');
        }
    }
})();
