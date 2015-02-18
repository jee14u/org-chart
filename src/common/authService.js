angular.module('orgChart.authService', []).factory('authService', function($q){

var service = { isLoggedIn: true, username: 'Test, User' };

//TODO: uncomment this line to use real login
//var service = { isLoggedIn: false, username: null };

service.login = function(username, password) {
	var deferred = $q.defer();
	$http.post('/api/login', { username: username, password: password })
	.success(function(response) {
		deferred.resolve(response);
	}).error(function(err) {
		deferred.reject(err);
	});
	return deferred.promise;
};

// stores username and password in a base 64 encoded cookie and adds it to the headers of every subsequent HTTP request
service.SetCredentials = function(username, password) {
	var authdata = base64.encode(username + ':' + password);

	$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
	$cookieStore.put('globals', {
		username: username,
		authdata: authdata
	});
	service.isLoggedIn = true;
	service.username = username;
};

// removes credentials from global scope and cookies
service.ClearCredentials = function() {
	$cookieStore.remove('globals');
	$http.defaults.headers.common.Authorization = 'Basic ';
	service.isLoggedIn = false;
	service.username = null;
};

service.getCookieCredentials = function() {
// keep user logged in after page refresh
$rootScope.globals = $cookieStore.get('globals') || {};
if ($rootScope.globals.currentUser) {
	$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
	service.isLoggedIn = true;
	service.username = $rootScope.globals.currentUser.username;
}
};

return service;

});