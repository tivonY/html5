/**
 * Created by tivon.tao.yang on 3/6/2017.
 */

angular.module('myApp.main', ['ngRoute'])

   	 .controller('MainController',  function($rootScope, $scope, $location) {


         $scope.toHome = function () {
             $location.path('/main/home');

             $("#liHome").addClass('active');
             $("#liData").removeClass('active');
             $("#liMaps").removeClass('active');
             $("#liTables").removeClass('active');
             $("#liPreferences").removeClass('active');
             $("#liOut").removeClass('active');
         }

		$scope.toMaps = function () {
			$location.path('/main/maps');

            $("#liHome").removeClass('active');
            $("#liData").removeClass('active');
            $("#liMaps").addClass('active');
            $("#liTables").removeClass('active');
            $("#liPreferences").removeClass('active');
            $("#liOut").removeClass('active');
		}

		$scope.toDataVis = function () {
			$location.path('/main/data-visualization');

            $("#liHome").removeClass('active');
            $("#liData").addClass('active');
            $("#liMaps").removeClass('active');
            $("#liTables").removeClass('active');
            $("#liPreferences").removeClass('active');
            $("#liOut").removeClass('active');
		}

		$scope.toTables = function () {
			$location.path('/main/tables');

            $("#liHome").removeClass('active');
            $("#liData").removeClass('active');
            $("#liMaps").removeClass('active');
            $("#liTables").addClass('active');
            $("#liPreferences").removeClass('active');
            $("#liOut").removeClass('active');
		}

		$scope.toPreferences = function () {
			$location.path('/main/preferences');

            $("#liHome").removeClass('active');
            $("#liData").removeClass('active');
            $("#liMaps").removeClass('active');
            $("#liTables").removeClass('active');
            $("#liPreferences").addClass('active');
            $("#liOut").removeClass('active');
		}

		$scope.logout = function () {
			$location.path("/sign-in");

            $("#liHome").addClass('active');
            $("#liData").removeClass('active');
            $("#liMaps").removeClass('active');
            $("#liTables").removeClass('active');
            $("#liPreferences").removeClass('active');
            $("#liOut").removeClass('active');
		}

		$scope.login = function () {
			$location.path("/main/home");

            $("#liHome").addClass('active');
            $("#liData").removeClass('active');
            $("#liMaps").removeClass('active');
            $("#liTables").removeClass('active');
            $("#liPreferences").removeClass('active');
            $("#liOut").removeClass('active');
		}
	}

);
