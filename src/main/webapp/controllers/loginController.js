walletApp.controller('loginController', function($scope, $http, $rootScope,
		$location) {

	$rootScope.utilisateur = {
		username : 'admin',
		password : 'admin'
	};
	var TOKEN_KEY = "jwtToken"
	$scope.getJwtToken = function() {
		return localStorage.getItem(TOKEN_KEY);
	};

	$scope.setJwtToken = function(token) {
		localStorage.setItem(TOKEN_KEY, token);
	};

	$scope.removeJwtToken = function() {
		localStorage.removeItem(TOKEN_KEY);
	};
	$scope.createAuthorizationTokenHeader = function() {
		var token = getJwtToken();
		if (token) {
			return {
				"Authorization" : token
			};
		} else {
			return {};
		}
	};

	/**
	 * login
	 */

	/*
	 * $scope.login = function() {
	 * 
	 * var res = $http.post("authentification/login", $scope.utilisateur);
	 * 
	 * res.error(function(data, status, headers, config) {
	 * 
	 * noty({ text : 'Erreur technique inattendu' + JSON.stringify({ data : data
	 * }), layout : 'topRight', type : 'error' }); });
	 * 
	 * res.success(function(data, status, headers, config) { if (data) {
	 * 
	 * window.location.href = 'index.html';
	 *  } });
	 *  };
	 */
	$scope.login = function() {
		alert('username :  '+$scope.utilisateur.username + "   motdepasse    : "
				+ $scope.utilisateur.password);
		var res = $http.post("/auth", $scope.utilisateur);
		alert('login');
		res.error(function(data, status, headers, config) {

			noty({
				text : 'Erreur technique inattendu' + JSON.stringify({
					data : data
				}),
				layout : 'topRight',
				type : 'error'
			});
		});

		res.success(function(data, status, headers, config) {
			if (data) {
				alert(data.token);
				$scope.setJwtToken(data.token);
				window.location.href = 'index.html';

			}
		});
	};


});