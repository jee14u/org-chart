angular.module('orgChart.exceptionHandler', []).factory('$exceptionHandler', 
	function($window) {
		return function(exception, cause) {
			console.error(exception.message, exception.stack);
           
           //TODO: need to log the error and show a friendly error message
           $window.alert('Error:' + exception.message);
       };
   }
   );