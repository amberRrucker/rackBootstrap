(function() {
    var footerCtrl = function($scope, $window){
        $scope.windowSize = '';
        $scope.linksOpen = false;
        $scope.content = {
            "aboutRackspace": [
                {
                    name: 'Our Story',
                    url: 'http://www.rackspace.com/about'
                },
                {
                    name: 'Leadership',
                    url: 'http://www.rackspace.com/about/leadership'
                },
                {
                    name: 'Legal',
                    url: 'http://www.rackspace.com/information/legal'
                },
                {
                    name: 'Contract Information',
                    url: 'http://www.rackspace.com/information/contactus'
                },
                {
                    name: 'Events',
                    url: 'http://www.rackspace.com/events'
                },
                {
                    name: 'Webinars',
                    url: 'http://www.rackspace.com/webinars'
                },
                {
                    name: 'Programs',
                    url: 'http://www.rackspace.com/programs'
                },
                {
                    name: 'Marketplace',
                    url: 'https://marketplace.rackspace.com'
                },
                {
                    name: 'News',
                    url: 'http://www.rackspace.com/blog/newsroom/'
                },
                {
                    name: 'Investors',
                    url: 'http://ir.rackspace.com/phoenix.zhtml?c=221673&p=irol-irhome'
                },
                {
                    name: 'Careers',
                    url: 'http://talent.rackspace.com'
                }
            ],
            "blogs": [
                {
                    name: 'The Rackspace Blog',
                    url: 'http://blog.rackspace.com'
                },
                {
                    name: 'Developer Blog',
                    url: 'https://developer.rackspace.com/blog/'
                },
                {
                    name: 'Customer Stories',
                    url: 'http://stories.rackspace.com/'
                },
                {
                    name: 'New Products',
                    url: 'http://www.rackspace.com/blog/new-products/'
                }
            ],
            "support": [
                {
                    name: 'Knowledge Center',
                    url: 'http://rackspace.com/knowledge_center/'
                },
                {
                    name: 'Support Forums',
                    url: 'https://community.rackspace.com/'
                },
                {
                    name: 'API Documentation',
                    url: 'http://docs.rackspace.com/'
                },
                {
                    name: 'Support Home',
                    url: 'http://support.rackspace.com/'
                },
                {
                    name: 'Developer Center',
                    url: 'http://developer.rackspace.com/'
                }
            ],
            "corplink": [
                {
                    name: 'Privacy Statement',
                    url: 'http://rackspace.com/information/legal/privacystatement'
                },
                {
                    name: 'Website Terms',
                    url: 'http://rackspace.com/information/legal/websiteterms'
                },
                {
                    name: 'Trademarks',
                    url: 'http://rackspace.com/information/legal/copyrights_trademarks'
                },
                {
                    name: 'Sitemap',
                    url: 'http://rackspace.com/sitemap'
                },
                {
                    name: 'Feedback',
                    url: 'https://feedback.rackspace.com/'
                }
            ]
        };


        $scope.$watch(function(){
            return $window.innerWidth;
        }, function(value) {
            $scope.windowSize = value;
            $scope.linksOpen = ($scope.windowSize > 991);

        });



    };
    angular.module('rackBoot').controller("footerCtrl", ["$scope", "$window", footerCtrl]);
}) ();