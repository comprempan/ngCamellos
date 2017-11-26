(function() {
    'use strict';
    angular
        .module('app')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController($scope, $timeout, matchesService, clasificationService) {
        var vm = this;

        vm.title = 'Home Controller';
        vm.loading = true;
        vm.previousMatch = null;
        vm.nextMatch = null;

        vm.test = test;

        activate();
        ////////////////

        function activate() {
            _getData();
            $timeout(function(){
                vm.loading = false;
            }, 1000);

        }

        function _getData() {
            var currentDate = new Date();
            
            matchesService.getPreviousMatch(currentDate)
            .then(function(response) {
                vm.previousMatch = response;
                return matchesService.getNextMatch(currentDate);
            }).then(function(response) {
                vm.nextMatch = response;
                return clasificationService.getClasification();
            }).then(function(response) {
                vm.clasification = response.data;
                console.log(vm.clasification);
            });
        }

        function test(value1, value2) {
            console.log("value1", value1);
            console.log("value2", value2);
            var diff1 = (value1.golesFavor - value1.golesContra);
            var diff2 = (value2.golesFavor - value2.golesContra);
            return (diff1 < diff2) ? 1 : -1;
        }

        $scope.friends = [
            {name: 'John',   favoriteLetter: 'Ä'},
            {name: 'Mary',   favoriteLetter: 'Ü'},
            {name: 'Mike',   favoriteLetter: 'Ö'},
            {name: 'Adam',   favoriteLetter: 'H'},
            {name: 'Julie',  favoriteLetter: 'Z'}
          ];
        
          $scope.localeSensitiveComparator = function(v1, v2) {
              console.log("v1", v1);
              console.log("v2", v2);
            // If we don't get strings, just compare by index
            if (v1.type !== 'string' || v2.type !== 'string') {
              return (v1.index < v2.index) ? -1 : 1;
            }
        
            // Compare strings alphabetically, taking locale into account
            return v1.value.localeCompare(v2.value);
          };
    }
})();
