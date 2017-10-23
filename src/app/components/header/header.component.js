(function() {
    'use strict';
    angular
        .module('app')
        .component('cmHeader', {
            controller: Controller,
            controllerAs: 'vm',
            templateUrl: "app/components/header/header.html"
        });

    /* @ngInject */
    function Controller(routerService) {
        var vm = this;
		vm.menuOptions = null;
        //METHODS

        /////////////
        activate();

        function activate() {
			vm.menuOptions = [
				{
					"text": "home",
					"href": "cm.home"
				},
				{
					"text": "resultados",
					"href": "cm.resultados"
				},
				{
					"text": "calendario",
					"href": "cm.calendario"
				},
				{
					"text": "clasificación",
					"href": "cm.clasificacion"
				}
			];


        }

    }
})();
