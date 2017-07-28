/**
 * Created by tivon.tao.yang on 3/6/2017.
 */

angular.module('myApp.home', ['ngRoute'])

   	 .controller('HomeController',  function($rootScope, $scope, $location) {
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

		$scope.login = function () {
			$location.path("/home");
		}
	}

);
