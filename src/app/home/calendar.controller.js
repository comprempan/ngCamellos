(function() {
    'use strict';
    angular
        .module('app')
        .controller('CalendarController', CalendarController);

    /* @ngInject */
    function CalendarController($scope, $timeout, matchesService) {
        var vm = this;

        vm.title = 'Calendar Controller';
        vm.loading = true;
        vm.calendar = null;

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
                vm.calendar = response.data;
            });
        }
    }
})();
