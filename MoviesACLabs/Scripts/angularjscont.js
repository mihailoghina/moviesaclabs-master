var app = angular.module("movies", []);

app.service("MoviesService", function ($http) {
    this.getMovies = function () {
        return $http({
            method: "GET",
            url: "/api/movies"
        });
    },

    this.adaugaFilm = function (movie) {
        return $http({
            method: "POST",
            url: "/api/movies",
            data: movie
        });     
    },

    this.stergeFilm = function (stergefilm) {
        return $http({
            method: "DELETE",
            url: "/api/movies",
            data: stergefilm
        });
    }
});

app.controller('MoviesCtrl', function ($scope, MoviesService) {
    
    $scope.moviesList = null;

    MoviesService.getMovies().then(function (dataResponse) {
        $scope.moviesList = dataResponse;
    });

    $scope.movie = {};
    $scope.movie.Title = "";
    $scope.movie.Description = "";

    $scope.stergefilm = "";

    $scope.addClick = function () {
        MoviesService.adaugaFilm($scope.movie);
    }

    $scope.deleteClick = function () {
        MoviesService.stergeFilm($scope.stergefilm);
    }
});