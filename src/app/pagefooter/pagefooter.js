angular.module('orgChart.pageFooter', [])
.directive('pageFooter', function(){
	return {
		replace: true,
		restrict: 'E',
		scope: {			
		},
		templateUrl: 'pagefooter/pagefooter.tpl.html',
		controller: ['$scope', function(){
			//$scope
		}]
	};
});
