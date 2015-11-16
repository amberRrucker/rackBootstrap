(function() {
    var hostingCtrl = function($scope){
        $scope.hosting = {"rackspace":[
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icon-dedicated-servers.png',
                title: 'Dedicated Servers',
                description: 'Dedicated and virtualized servers to meet your performance, security, network capacity and compliance needs.'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icon-public-cloud.png',
                title: 'Public Cloud',
                description: 'Utility Cloud compute, databases, and storage on-demand. All built on OpenStack, supported by Rackspace.'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icon-private-cloud.png',
                title: 'Private Cloud',
                description: 'Your own secure, scalable private cloud, in your data center or ours, supported by Rackspace. '
            }
        ],
            "partners":[
            {
                icon: 'http://034d24a88b3e71fd72a6-f083e9a6295a3f0714fa019ffdca65c3.r47.cf1.rackcdn.com/home/v8/microsoft-logo-white-2x.png',
                title: 'Microsoft Azure',
                description: 'Keep IT focused on innovating in the cloud, while we take care of supporting Azure.'
            },
            {
                icon: 'http://034d24a88b3e71fd72a6-f083e9a6295a3f0714fa019ffdca65c3.r47.cf1.rackcdn.com/home/v8/aws-logo-white-2x.png',
                title: 'Amazon Web Services',
                description: 'Technology and automation plus human experts to deliver ongoing architecture, security, and operations.'
            }
        ]}

    };
    angular.module('rackBoot').controller("hostingCtrl", ["$scope", hostingCtrl]);
}) ();