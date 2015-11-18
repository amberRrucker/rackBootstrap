(function () {
    var topNavCtrl = function ($scope) {
        $scope.navigation = ["Why Rackspace", "Dedicated Hosting", "Cloud", "Infrastructure", "Solutions", "Support"];

        $('.navbar').on('show.bs.collapse', function () {
            var actives = $(this).find('.collapse.in'),
                hasData;

            if (actives && actives.length) {
                hasData = actives.data('collapse');
                if (hasData && hasData.transitioning) return;
                actives.collapse('hide');
                hasData || actives.data('collapse', null)
            }
        });

    };
    angular.module('rackBoot').controller("topNavCtrl", ["$scope", topNavCtrl]);
})();

