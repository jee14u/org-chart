angular.module( 'orgChart.pageHeader', [])
.directive('pageHeader', function() {
	return {
		replace: true,
		restrict: 'E',
		scope: {
			appName: '=',
			userName: '='			
		},
		templateUrl: 'pageheader/pageheader.tpl.html',
		
		controller: function($scope){
			$scope.status = {
				isopen: false
			};
		}
	};
});
