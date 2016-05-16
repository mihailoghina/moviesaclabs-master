var app = angular.module("entity", []);

app.service("EntityService", function ($http) {

    this.getActors = function () {
        return $http({
            method: "GET",
            url: "/api/actors"
        });
    },

    this.getAwards = function () {
        return $http({
            method: "GET",
            url: "/api/award"
        });
    }

});

app.controller('EntityCtrl', function ($scope, EntityService) {

    $scope.actorsList = null;
    $scope.awardsList = null;
    $scope.lungimeMax = 0;

    EntityService.getAwards().then(function (dataResponse) {

        $scope.awardsList = dataResponse.data;

        angular.forEach($scope.awardsList, function (award) {

            if (award.Description.length > $scope.lungimeMax)
                $scope.lungimeMax = award.Description.length;
        });
    });

    EntityService.getActors().then(function (dataResponse) {

        $scope.actorsList = dataResponse.data;

    });

    


});