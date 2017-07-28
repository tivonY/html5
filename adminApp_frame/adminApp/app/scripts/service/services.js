//自定义Service
'use strict';

angular.module("myApp").service("voteSer", ["$q", "$http", function($q, $http) {

    this.getAllData = function() {

        return $http.get("../data/players.json").then(function(resp) {
            if(typeof resp.data === "object") {

                return resp.data;
            }else {
                //无效数据
                return $q.reject(resp.data);
            }
        }, function(resp) {
            return $q.reject(resp.status);
        });


    };

	this.getPlayerNames = function() {

		return $http.get("../data/players.json").then(function(resp) {
			if(typeof resp.data === "object") {
				var playerNames = [];
				angular.forEach(resp.data, function(v, k) {
					playerNames.push(v.name.toLowerCase());
				});
				return playerNames;
			}else {
				//无效数据
				return $q.reject(resp.data);
			}
		}, function(resp) {
			return $q.reject(resp.status);
		});


	};


}]);