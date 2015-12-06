angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		return {
				GetStudents: function(){
					return $http.get("http://localhost:8000/v1/students");
				},
				PostStudents: function(payload){
					return $http.post("http://localhost:8000/v1/student", payload);
				}
	    };
}]);
