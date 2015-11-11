angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', function ($scope) {
    	$scope.title = "Hola, mundo."
      $scope.exampleObject = {text: "Hola, Mundo"}

      $scope.changeExampleObject = function(){
        $scope.exampleObject = {text: "Adios, mundo."};
      }
  }]);
