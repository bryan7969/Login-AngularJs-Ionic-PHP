// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

function controllerForm($scope, $http) {
      $scope.rsJSON = [ ];
      // obtenemos el evento submit del formulario ng-submit="entrar()"
      $scope.entrar = function() {
        consultarUsuario($http,$scope);
      };
 }

 function consultarUsuario($http,$scope){
    var req = {
     method: 'POST',
     url: 'http://127.0.0.1/llantas/index.php',
     headers: {
       'Content-Type': undefined
     },
     data: { usuario : $scope.txtUsuario , contrasena : $scope.txtContrasena },
     dataType: "jsonp"
    }

    $http(req)
        .success(function(data) {
          console.log(data);
           // si no existe el usuario nos muestre un alerta de error
           if (typeof(data.usuario) == "undefined"){
                alert("sin data");
           }else{
             // si existe ya la hicimos y que nos ponga un mensaje de bienvenida
              alert("yeah!");
           }
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });   

 

  /*
    $http.post('http://127.0.0.1/llantas/index.php',{ usuario : $scope.txtUsuario , contrasena : $scope.txtContrasena })
        .success(function(data) {
          console.log(data);
           // si no existe el usuario nos muestre un alerta de error
           if (typeof(data.usuario) == "undefined"){

           }else{
             // si existe ya la hicimos y que nos ponga un mensaje de bienvenida
           }
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });   
  */
   

  }