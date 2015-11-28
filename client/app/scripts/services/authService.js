angular.module('AngularScaffold.Services').factory('AuthService', ['$http',
	function($http){
		return {
				Logout: function(){
					return $http.get("v1/logout");
				},
				Login: function(payload){
					return $http.post("v1/login", payload);
				},
        Register: function(payload){
          return $http.post("v1/register", payload);
        }
	    };
}]);
