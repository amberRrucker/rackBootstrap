(function() {
    var topNavCtrl = function($scope){
        $scope.navigation = ["Why Rackspace", "Dedicated Hosting", "Cloud", "Infrastructure", "Solutions", "Support"];


    };
    angular.module('rackBoot').controller("topNavCtrl", ["$scope", topNavCtrl]);
}) ();