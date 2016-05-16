var app = angular.module("awards", []);

app.service("AwardsService", function ($http) {

    this.getAwards = function () {
        return $http({
            method: "GET",
            url: "/api/award"
        });
    },

    this.getAwardsById = function (id) {
        return $http({
            method: "GET",
            url: "/api/award/" + id,
        });
    },

    this.postAwards = function (newAward) {
        return $http({
            method: "POST",
            url: "/api/award",
            data: newAward
        });
    },

    this.putAwards = function (id) {
        return $http({
            method: "PUT",
            url: "api/award/" + id,
        })
    },

    this.deleteAwards = function (id) {
        return $http({
            method: "DELETE",
            url: "/api/award/" + id,
        });
    }
});

app.controller('AwardsCtrl', function ($scope, AwardsService) {

    $scope.awardsList = null;
    $scope.deleteAwardByTitle = "";
    $scope.editAward;

    
    AwardsService.getAwards().then(function (dataResponse) {

        $scope.awardsList = dataResponse.data;

    });
    

    $scope.addClick = function () {

        $scope.newAward = {
            Title: $scope.addTitle,
            Description: $scope.addDescription
        }
            
        AwardsService.postAwards($scope.newAward);
    }


    $scope.deleteClick = function () {

        angular.forEach($scope.awardsList, function (award) {

            if (award.Title == $scope.deleteAwardByTitle)
                AwardsService.deleteAwards(award.Id);
        });
    };


    $scope.editClick = function () {

        angular.forEach($scope.awardsList, function (award) {

            if (award.Id == $scope.editAwardById) {
                award.Title = $scope.title_e;
                award.Description = $scope.description_e;

                AwardsService.putAwards(award.Id);
            }

        });

    }

});
