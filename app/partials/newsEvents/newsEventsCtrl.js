(function () {
    var newsEventsCtrl = function ($scope) {
        $scope.content = {
            "newsEvents": [
                {
                    type: 'NEWS',
                    date: '11.17.2015',
                    title: 'OpenStack Doc PTL on Mitaka: Priorities a Blend of…',
                    info: 'In the wake of OpenStack Tokyo last month, Rackblog asked Rackers serving as Project Team Leads to shar…'
                },
                {
                    type: 'NEWS',
                    date: '11.17.2015',
                    title: 'Overcoming the Challenges of Microsoft Azure: Secu…',
                    info: 'Is it any wonder that security is a leading inhibitor to cloud adoption? Practically each day brings ne…'
                },
                {
                    type: 'NEWS',
                    date: '11.16.2015',
                    title: 'Deploy Adobe Experience Manager on AWS…',
                    info: 'When the Rackspace Digital Product team started looking at building managed platforms to run digital wo…'
                }
            ]
        };

    };
    angular.module('rackBoot').controller("newsEventsCtrl", ["$scope", newsEventsCtrl]);
})();