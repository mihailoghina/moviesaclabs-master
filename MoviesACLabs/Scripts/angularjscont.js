var app = angular.module("movies", []);

app.service("MoviesService", function ($http) {

    this.getMovies = function () {
        return $http({
            method: "GET",
            url: "/api/movies"
        });
    },

    this.getMovieById = function (id) {
        return $http({
            method: "GET",
            url: "/api/movies/" + id,
        });
    },

    this.postMovie = function (newMovie) {
        return $http({
            method: "POST",
            url: "/api/movies",
            data: newMovie
        });     
    },

    this.putMovie = function (id) {
        return $http({
            method: "PUT",
            url: "api/movies/" + id,
        })
    },

    this.deleteMovie = function (id) {
        return $http({
            method: "DELETE",
            url: "/api/movies/" + id,
        });
    }
});

app.controller('MoviesCtrl', function ($scope, MoviesService) {
    
    $scope.moviesList = null;
    $scope.deleteMovieByTitle = "";
    $scope.editMovie;
  

    MoviesService.getMovies().then(function (dataResponse) {

        $scope.moviesList = dataResponse.data;
        listaFilme = dataResponse.data;

    });


    $scope.addClick = function () {

        $scope.newMovie = {
            Title: $scope.addTitle,
            Description: $scope.addDescription
            /*
            Actors:
                {
                    Id: 1,
                    Name: "actor1",
                    DateOfBirth: "2016-05-11T20:55:09.456Z",
                    Revenue: 524
                },
            Reviews:
                  {
                      Id: 2,
                      Comment: "comm",
                      Rating: 4
                  }
                  */
        };
        MoviesService.postMovie($scope.newMovie);
    }
   

    $scope.deleteClick = function () {

        angular.forEach($scope.moviesList, function (movie) {

            if (movie.Title == $scope.deleteMovieByTitle)
                MoviesService.deleteMovie(movie.Id);
        });
    };


    $scope.editClick = function () {

        angular.forEach($scope.moviesList, function (movie) {

            if (movie.Id == $scope.editMovieById)
            {             
                movie.Title = $scope.title_e;
                movie.Description = $scope.description_e;
                
                MoviesService.putMovie(movie.Id);         
            }             
        });
    }

});
