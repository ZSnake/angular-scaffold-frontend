angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
	        GetTitle: function(){
            return "new title";
          }
	    };
}]);
