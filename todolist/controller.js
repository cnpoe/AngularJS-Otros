angular.module("todoList", ["LocalStorageModule"])
.controller("todoListController", function ($scope, localStoragedService) {
	$scope.todo = [];
	$scope.addActividad = function(){
		$scope.todo.push($scope.newActividad);
		$scope.newActividad = {};
	}
})