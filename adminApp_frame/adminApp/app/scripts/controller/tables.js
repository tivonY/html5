/**
 * Created by Apple on 2017/3/7.
 */
'use strict';

angular.module('myApp.tables', ['ngRoute'])

    .controller('TablesController', function($rootScope, $scope, $location, voteSer) {

        $scope.users = [];

        voteSer.getAllData().then(function(data) {

            //判断该球员姓名是否已存在
            if(data != null) {
                $scope.users = data;
            }else {
                console("获取数据失败");
            }
        });


    });