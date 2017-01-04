/*module: 
primer parámetro nombre de nuetro módulo
segundo parámetro dependencias
*/
var app = angular.module("MyFirstApp",[]);

app.controller("FirstController", function ($scope) {
	$scope.nombre = "Luis";
	$scope.nuevoComentario = {};
	$scope.comentarios = [{
		comentario: "Bueno",
		username: "usuario"
	},
	{
		comentario: "Bueno",
		username: "usuario"
	}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
	}
});