(function(){
	'use strict';
	/**
	 * Contain config parameters.
	 * @constant
	 */
    var urlPath = 'http://localhost:8080/';
    angular.module('cm.config', [])
    .constant('cmConfig', {
        url_path: urlPath,
        content_type: "application/json",
        version:'1.0.0-SNAPSHOT'
    });

})();
