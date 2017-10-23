(function(){
	'use strict';
	/**
	 * Contain config parameters.
	 * @constant
	 */
    var urlPath = '<%- url_path %>';
    angular.module('cm.config', [])
    .constant('cmConfig', {
        url_path: urlPath,
        content_type: "application/json",
        version:'<%- version %>'
    });

})();
