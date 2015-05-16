angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])
/*initial_spi: así llamamos al módulo central de la aplicación -- ngRoute me llama la ruta -- 
initial_spi.controllers así se denomina al módulo (ejemplo) que contiene los elementos del controller.js*/
.config(['$routeProvider', function($routeProvider){
    /*
     * `when()` los puedo agregar cuantas veces sea necesario
     * `otherwise()` una sola vez "OJO", además siempre va de último
    */
    $routeProvider

    .when('/mobile', {
        templateUrl : "views/mobile.html",
        controller: 'mobileController'
    })

    .when('/smartphone', {
        templateUrl: "views/smartphone.html",
        controller: 'smartphoneController'
    })
    
    .otherwise({
        redirectTo: '/',
        templateUrl: 'otherwise.html'
    });
 }]);