(function() {
    'use strict';
    angular
        .module('app')
        .directive('ngEnter', ngEnter);

    /* @ngInject*/
    function ngEnter() {
        // Usage:
        //  create a langaguage select with all languages availables
        var directive = {
            link: link
        };
        return directive;
        function link(scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                        if(event.currentTarget.nodeName === 'INPUT'){
                            // event.currentTarget.value = '';
                            event.currentTarget.focus();
                        }
                    });
                    event.preventDefault();
                }
            });
        }
    }
})();