/*module: 
primer parámetro nombre de nuetro módulo
segundo parámetro dependencias
*/
var app = angular.module("MyFirstApp",[]);

app.controller("FirstController", function ($scope) {
	$scope.nombre = "Luis";
});