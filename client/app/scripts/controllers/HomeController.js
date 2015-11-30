angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', 'HomeService', function ($scope, HomeService) {
    	$scope.title = "Tabla de estudiantes de programamción 4."
      $scope.exampleObject = {text: "Hola, Mundo"}
      $scope.students = [];
      $scope.student = {};

      $scope.getStudents = function(){
        HomeService.GetStudents().then(function(response){
          $scope.students = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.postStudents = function(){
        HomeService.PostStudents($scope.student).then(function(response){
          alert("Posted to /students");
          $scope.getStudents();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

  }]);
