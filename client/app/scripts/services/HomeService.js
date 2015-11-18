angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
				GetStudents: function(){
					return $http.get("v1/students");
				},
				PostStudents: function(payload){
					return $http.post("v1/student", payload);
				}
	    };
}]);
