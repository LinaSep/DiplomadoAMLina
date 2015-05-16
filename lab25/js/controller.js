angular.module('initial_spi.controllers', [])/*así llamo al módulo .controllers*/

.controller('mobileController', function($scope){
	$scope.mobile_message = 'Algún Mensaje';
})

.controller('smartphoneController', function($scope){
	$scope.smartphone_message = 'Otro Mensaje';
});