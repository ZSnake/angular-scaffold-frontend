angular.module('AngularScaffold.Services').factory('AuthService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		return {
				Logout: function(){
					return $http.get("http://localhost:8000/v1/logout");
				},
				Login: function(payload){
					return $http.post("http://localhost:8000/v1/login", payload);
				},
        Register: function(payload){
          return $http.post("http://localhost:8000/v1/register", payload);
        }
	    };
}]);
