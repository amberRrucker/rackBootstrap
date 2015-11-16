(function() {
    var itSolutionsCtrl = function($scope){
        $scope.solutions = {"itSolutions":[
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icons/icon_ecommerce.gif',
                title: 'Ecommerce'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icons/icon_content_management.gif',
                title: 'Web Content Management'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icons/icon_email_collaboration.gif',
                title: 'Email'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icons/icon_collaboration.gif',
                title: 'Productivity & Collaboration'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icons/icon_website_hosting.gif',
                title: 'Website Hosting'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icons/icon_app_hosting.gif',
                title: 'Web Apps'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icons/icon_data_services.gif',
                title: 'Data Services'
            },
            {
                icon: 'https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/home/v8/icons/icon_private_cloud.gif',
                title: 'Managed Security & Compliance'
            }
        ]};

        $scope.reloadGif = function(index) {
            $("#solution-"+ index).attr("src", $scope.solutions.itSolutions[index].icon);
        }


    };
    angular.module('rackBoot').controller("itSolutionsCtrl", ["$scope", itSolutionsCtrl]);
}) ();