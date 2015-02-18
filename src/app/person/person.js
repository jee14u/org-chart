angular.module( 'orgChart.person', ['orgChart.employeeService'])
.directive('personWidget', function(){
	return {
		replace: true,
		restrict: 'E',
		scope: {
			data: '=',
			showExpand: '=',
			showCollapse: '='
		},
		templateUrl: 'person/person.tpl.html',
		
		controller: function($scope, employeeService){
			$scope.expand = function(){
				var id = $scope.data.employeeId;

				$scope.myPromise = employeeService.setEmployee(id);
			};

			$scope.collapse = function() {				
				var id = $scope.data.managerId;
				$scope.myPromise = employeeService.setEmployee(id);
			};

			$scope.gotoMatrixManager = function(matrixManagerId) {
				$scope.myPromise = employeeService.setEmployee(matrixManagerId);
			};
		}
	};
});
