angular.module("todoList", ["LocalStorageModule"])
.controller("todoListController", function ($scope, localStorageService) {
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}else{
		$scope.todo = [];
	}

	$scope.addActividad = function(){
		$scope.todo.push($scope.newActividad);
		$scope.newActividad = {};
		localStorageService.set("angular-todolist",$scope.todo);
	}

	$scope.clean = function(){
		$scope.todo = [];
		localStorageService.set("angular-todolist",$scope.todo);
	}
})