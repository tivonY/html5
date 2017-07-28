'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'myApp.main',
    'myApp.home',
    'myApp.sign_in',
    'myApp.maps',
    'myApp.data-visualization',
    'myApp.tables',
    'myApp.preferences'
]).

config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state("main", { //导航用的名字，如<a ui-sref="login">login</a>里的login
            url: '/main',    //访问路径
            templateUrl:'views/main.html',
            controller : 'MainController'
        })
        .state('main.home', {//用户管理
            url : "/home",
            views : {
                'menuContent' : {
                    templateUrl : "views/home.html",
                    controller : 'HomeController'
                }
            }
        })
        .state('main.tables', {
            url : "/tables",
            views : {
                'menuContent' : {
                    templateUrl : "views/tables.html",
                    controller : 'TablesController'
                }
            }
        })
        .state('main.preferences', {
            url : "/preferences",
            views : {
                'menuContent' : {
                    templateUrl : "views/preferences.html",
                    controller : 'PreferencesController'
                }
            }
        })
        .state('main.data-visualization', {
            url : "/data-visualization",
            views : {
                'menuContent' : {
                    templateUrl : "views/data-visualization.html",
                    controller : 'DatavisualizationController'
                }
            }
        })
        .state('main.maps', {
            url : "/maps",
            views : {
                'menuContent' : {
                    templateUrl : "views/maps.html",
                    controller : 'MapsController'
                }
            }
        })
        .state('sign-in', {
            url: '/sign-in',
            cache:'false',
            templateUrl: 'views/sign-in.html',
            controller: 'SignInController'
        });

    $urlRouterProvider.when("", "/sign-in");

    // $routeProvider.when('/main', {
    //     url : "/main",
    //     templateUrl : "views/main.html",
    //     controller : 'HomeController'
    // });

    //$routeProvider.when('/home', { templateUrl: 'views/home.html', controller: 'HomeController'});

    // $routeProvider.when('main.userManagement', {//用户管理
    //
    //     url : "/userManagement",
    //     views : {
    //         'menuContent' : {
    //             templateUrl : "templates/home.html",
    //             controller : 'HomeController'
    //         }
    //     }
    // });
    //
    //
    // $routeProvider.when('/sign-in', {templateUrl: 'views/sign-in.html', controller: 'SignInController'});
    // $routeProvider.when('/maps', {templateUrl: 'views/maps.html', controller: 'MapsController'});
    // $routeProvider.when('/data-visualization', {templateUrl: 'views/data-visualization.html', controller: 'DatavisualizationController'});
    // $routeProvider.when('/tables', {templateUrl: 'views/tables.html', controller: 'TablesController'});
    // $routeProvider.when('/preferences', {templateUrl: 'views/preferences.html', controller: 'PreferencesController'});
    //     $routeProvider.otherwise({redirectTo: '/userManagement'});

}]);

