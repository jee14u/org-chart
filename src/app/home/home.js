angular.module( 'orgChart.home', [
  'ui.router',
  'orgChart.person'
  ])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ 
      pageTitle: 'Home' 
    }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, $window, $timeout, employeeService ) {
  $scope.myPromise = employeeService.goTop();

    $scope.start = 30;
    $scope.end = 1000;
    $scope.middle = 500;

    var setPosition=function() {
      if (!$("#p0").position()) { return; }

      var width = $("#p0").width();

      $scope.start = $("#p0").position().left + width / 2 - 30;
      var top = $("#p0").position().top;
      var x = top, i = 1;
      if (!$scope.data.reporters) { return; }
      while (i < $scope.data.reporters.length && $("#p" + i).position().top == top ) { 
        i++;
      }
      var end = $("#p" + (i - 1) ).position().left + width / 2 - 30;
      $scope.end = end;
      $scope.middle = ($scope.start + $scope.end) / 2;
      $("#pm").css({ "left": ($scope.middle - width / 2 - 30) });
    };

    $scope.$watch(function(){
      return employeeService.data;
    }, function(data){
     $scope.data = data;

     $timeout(function(){
       setPosition();
       $scope.$apply();
     }, 300);
 
     angular.element($window).bind('resize', function(){ 
      setPosition(); 
      $scope.$apply();
    });
  });

})
;
