(function() {
    'use strict';
    angular
        .module('app')
        .factory('clasificationService', clasificationService);

    /* @ngInject */
    function clasificationService($http) {
        var service = {
            getClasification: getClasification
        };
        var promise;

        return service;
        ////////////////

        function getClasification() {
            return $http.get('assets/json/clasificacion.json');
        }
    }
})();
