/**
 * Created by Apple on 2017/3/7.
 */
'use strict';

angular.module('myApp.preferences', ['ngRoute'])

    .controller('PreferencesController', function($rootScope, $scope, $location) {

        $scope.toMaps = function () {
            $location.path('/maps');
        }

        $scope.toDataVis = function () {
            $location.path('/data-visualization');
        }

        $scope.toTables = function () {
            $location.path('/tables');
        }

        $scope.toPreferences = function () {
            $location.path('/preferences');
        }

        $scope.logout = function () {
            $location.path("/sign-in");
        }

        $scope.toHome = function () {
            $location.path('/home');
        }
    });