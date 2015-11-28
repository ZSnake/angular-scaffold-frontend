angular.module('AngularScaffold.Controllers')
  .controller('MainController', ['AuthService', '$scope', function (authService, $scope) {
      $scope.user = {};
      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
        }).catch(function(err){
          alert('error loggin out');
        })
      }

      $scope.login = function(){
        authService.Login($scope.user).then(function(response){
          alert('logged in successfully');
        }).catch(function(err){
          alert('error loggin in');
        });
      }

      $scope.register = function(){
        authService.Register({username: $scope.user.username, password:  $scope.user.password, scope: ['admin']}).then(function(response){
          alert('registered correctly');
        }).catch(function(err){
          alert('error registering user');
        })
      }
  }]);
