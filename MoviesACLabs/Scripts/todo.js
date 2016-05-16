var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {

    $scope.todos = [];
    $scope.todoList = "";
    $scope.total = 0;
    $scope.done;
    $scope.activelist = 0;

    $scope.add = function () {
        if ($scope.todoList !== null) {
            $scope.todos.push({
                name: $scope.todoList,
                done: false              
            });
            $scope.todoList = null;
            $scope.total = $scope.total + 1;
            $scope.activelist = $scope.activelist + 1;
        }
    }

    $scope.delete = function (index) {
        $scope.todos.splice(index, 1);
        $scope.total = $scope.total - 1;
    }

    $scope.checked = function (index) {
        $scope.todos[index].done = false;
        $scope.activelist = $scope.activelist + 1;
    }
    
    $scope.unchecked = function (index) {
        $scope.todos[index].done = true;
        $scope.activelist = $scope.activelist - 1;
    }
});