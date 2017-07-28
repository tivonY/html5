/**
 * Created by tivon.tao.yang on 3/6/2017.
 */
'use strict';

angular.module('myApp.sign_in', ['ngRoute'])

.controller('SignInController', function($rootScope, $scope, $location) {

    //$rootScope.mess = "hello";

    $scope.login = function () {
        $location.path("/main/home");
    }


});