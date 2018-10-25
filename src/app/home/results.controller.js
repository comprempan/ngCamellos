(function() {
    'use strict';
    angular
        .module('app')
        .controller('ResultsController', ResultsController);

    /* @ngInject */
    function ResultsController($scope, $timeout, matchesService) {
        var vm = this;

        vm.title = 'Results Controller';
        vm.loading = true;
        vm.results = null;

        activate();
        ////////////////

        function activate() {
            _getCalendar();
            $timeout(function(){
                vm.loading = false;
            }, 1000);

        }

        function _getCalendar() {
            var currentDate = new Date();
            
            matchesService.getCalendar(currentDate)
            .then(function(response) {
                vm.results = _getResults(response.data);
            });
        }

        function _getResults(calendar) {
            var results = [];
            var cmMatch;
            for(var x = 0; x < calendar.length; x++) {
                results = results.concat([], _getCMresults(calendar[x].partidos));
            }
            return results;
        }

        function _getCMresults(matches) {
            var match = matches.filter(function(obj) {
                if(obj.local === "FS Camellos" || obj.visitante == "FS Camellos") {
                    return obj;
                }
            });
            return match;
        }
    }
})();
