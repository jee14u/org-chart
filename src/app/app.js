angular.module( 'orgChart', [
  'templates-app',
  'templates-common',
  'orgChart.pageHeader',
  'orgChart.appHeader',
  'orgChart.home',  
  'orgChart.person',
  'orgChart.pageFooter',
  'orgChart.topOfChart',
  'orgChart.employeeService',
  'orgChart.exceptionHandler',
  'orgChart.authService',
  'ui.bootstrap',
  'ui.router',
  'restangular',
   'cgBusy'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, RestangularProvider ) {
  $urlRouterProvider.otherwise( '/home' );

  RestangularProvider.setBaseUrl('/api');
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, authService ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | EMC Org Chart' + (versionNumber > 0 ? ('-' + versionNumber) : '');
    }

  $scope.userName =  authService.username;

  });
})
;

