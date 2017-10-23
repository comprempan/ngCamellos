(function() {
    'use strict';
    angular
        .module('app')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$timeout', 'matchesService'];
    /* @ngInject */
    function HomeController($timeout, matchesService) {
        var vm = this;

        vm.title = 'Home Controller';
        vm.loading = true;
        vm.previousMatch = null;
        vm.nextMatch = null;

        activate();
        ////////////////

        function activate() {
            _getData();
            $timeout(function(){
                vm.loading = false;
            }, 1000);

        }

        function _getData() {
            var date = new Date();
            matchesService.getMatch(date.getTime())
            .then(function(response) {
                console.log("getData", response);
            });
        }


    }
})();
