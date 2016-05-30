var app = angular.module("test", []);

app.service("PlayersService", function ($http) {

    this.getPlayers = function () {
        return $http({
            method: "GET",
            url: "/api/players"
        });
    },

    this.postPlayer = function (newPlayer) {
        return $http({
            method: "POST",
            url: "/api/players",
            data: newPlayer
        });
    }

});

app.service("FootballService", function ($http) {

    this.getFootball = function () {
        return $http({
            method: "GET",
            url: "/api/football"
        });
    },

    this.postFootball = function (newfootball) {
        return $http({
            method: "POST",
            url: "/api/football",
            data: newfootball
        });
    }

});

app.controller('PlayersCtrl', function ($scope, PlayersService) {


    PlayersService.getPlayers().then(function (dataResponse) {

        $scope.playersList = dataResponse.data;

    });

    $scope.addClick = function () {

        $scope.newPlayer = {
            Name: $scope.addName,
            Age: $scope.addAge,
            Goals: $scope.addGoals
        };
        PlayersService.postPlayer($scope.newPlayer);
    }

});

app.controller('FootballCtrl', function ($scope, FootballService) {


    FootballService.getFootball().then(function (dataResponse) {

        $scope.footballList = dataResponse.data;

    });

    $scope.addClick = function () {

        $scope.newFootball = {
            Name: $scope.addName,
            Contry: $scope.addCountry
        };
        FootballService.postFootball($scope.newfootball);
    }

});
