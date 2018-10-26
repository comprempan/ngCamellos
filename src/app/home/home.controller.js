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
        vm.diffGoals = diffGoals;

        activate();
        ////////////////

        function activate() {
            _getData();
            $timeout(function(){
                vm.loading = false;
            }, 1000);

        }

        function _getData() {
            moment.locale('es');
            var currentDate = new Date();
            var current = moment();

            var jander;
            var klander;

            console.log("current", current);
            console.log(current.format("X"));
            console.log("fecha", moment.unix(1540542534));

            moment.locale("es");
            klander = moment("2019-06-01").add(1, 'days').format("X");
            jander = moment.unix(1541286000);
            jander.locale(false);



            //console.log("fecha", moment("2018-09-29"), moment("2018-09-29").format("X"), moment.unix(1538172000).utc());

            console.log("jander", klander, moment.unix(1541286000), jander);

            
            
            //matchesService.getPreviousMatch(currentDate)
            matchesService.getPreviousMatch2(current)
            .then(function(response) {
                vm.previousMatch = response;
                return matchesService.getNextMatch(currentDate);
            }).then(function(response) {
                vm.nextMatch = response;
                return clasificationService.getClasification();
            }, function() {
                vm.nextMatch = null;
                return clasificationService.getClasification();
            }).then(function(response) {
                vm.clasification = response.data;
                console.log(vm.clasification);
            });

            /*matchesService.getPreviousMatch2(current)
            .then(function(response) {
                vm.previousMatch = response;
                return matchesService.getNextMatch(currentDate);
            });*/
        }

        function diffGoals(value1, value2) {
            console.log("value1", value1);
            console.log("value2", value2);
            var diff1 = (value1.golesFavor - value1.golesContra);
            var diff2 = (value2.golesFavor - value2.golesContra);
            return (diff1 < diff2) ? 1 : -1;
        }
    }
})();
