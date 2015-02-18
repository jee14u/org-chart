angular.module( 'orgChart.topOfChart', [])
.directive('topOfChart', function($window, employeeService) {
	return {
		replace: true,
		restrict: 'E',		
		templateUrl: 'topOfChart/topOfChart.tpl.html',
		controller: function($scope, employeeService) {
			$scope.gotoTop = function() {
				$scope.myPromise = employeeService.goTop();
			};

			$scope.$watch(function() { return employeeService.onTop; },
				function(val){					
					$scope.visible = !val;
				});
		}
	};
});