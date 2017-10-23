(function() {
    'use strict';
    angular
        .module('app')
        .factory('routerService', routerService);
    routerService.$inject = ['$state', '$window'];
    /* @ngInject */
    function routerService($state, $window) {
        var service = {
            goTo: goTo,
            goToUrl: goToUrl
        };
        return service;
        ////////////////

        /**
         * @description method to navigate to a specific router stare
         * @param  {string} section - route state to navigate
         * @param  {object} params  - params of this section
         */
        function goTo(section, params) {
            if ($state.current.name != section) {
                $state.go(section, params);
            } else {
                $state.go(section, params,{notify: false});
            }
        }

        /**
         * @description method to navigate to a specific url
         * @param  {string} url - the url to navigate
         */
        function goToUrl(url) {
            $window.location.href = url;
        }
    }
})();