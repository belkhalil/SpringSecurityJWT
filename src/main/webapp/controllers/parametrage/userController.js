walletApp
		.controller(
				'UserController',
				function($scope, $http, $rootScope, $location) {

					/**
					 * initajouter user
					 */
					$scope.initAdd = function() {
						$rootScope.utilisateur = {
							id : null
						};
						$scope.userRecherche = {
							id : null,
							nom : '',
							prenom : '',
							telephone : '',
							mail : '',
							login : '',
							motDePasse : '',
							idPoste : '',
							idProfil : ''

						};

						$location.path("/updateUsers");
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
						var token = $scope.getJwtToken();
						if (token) {
							return {
								"Authorization" : token
							};
						} else {
							return {};
						}
					};
					/**
					 * binding email o login
					 */
					$scope.initLogin = function() {
						$rootScope.utilisateur.login = $rootScope.utilisateur.mail;
					};

					/**
					 * ajouter un user
					 */
					$scope.submit = function() {

						var res;
						/**
						 * Ajouter
						 */
						if ($scope.utilisateur.id == null) {

							res = $http.post("utilisateur/save",
									$scope.utilisateur);

							res.error(function(data, status, headers, config) {
								noty({
									text : 'Erreur technique inattendu'
											+ JSON.stringify({
												data : data
											}),
									layout : 'topRight',
									type : 'error'
								});
							});
						}
						/**
						 * modifier
						 */
						else {

							res = $http.post("utilisateur/update",
									$scope.utilisateur);

							res.error(function(data, status, headers, config) {
								noty({
									text : 'Erreur technique inattendu'
											+ JSON.stringify({
												data : data
											}),
									layout : 'topRight',
									type : 'error'
								});
							});
						}

						res.success(function(data, status, headers, config) {
							$location.path("/Users");
							noty({
								text : 'Opération effectue avec succes',
								layout : 'topRight',
								type : 'success'
							});
						});

					};

					/**
					 * inti modif
					 */
					$scope.edit = function(obj) {
						$location.path("/updateUsers");
						$rootScope.utilisateur = obj;
						$rootScope.utilisateur.idPoste = '' + obj.poste.id;
						$rootScope.utilisateur.idProfil = '' + obj.profil.id;
						$rootScope.utilisateur.etat = '' + obj.etat;
					};
					/**
					 * supprimer
					 */
					$scope.delet = function(id) {
						noty({
							text : 'Do you want to continue?',
							layout : 'topRight',
							buttons : [
									{
										addClass : 'btn btn-success btn-clean',
										text : 'Ok',
										onClick : function($noty) {
											$noty.close();
											var res = $http.post(
													"utilisateur/delete", id);

											res
													.success(function(data,
															status, headers,
															config) {
														setTimeout(function() {
															$scope.loadAll();
														}, 500);
														noty({
															text : 'Opération effectue avec succes',
															layout : 'topRight',
															type : 'success'
														});
													});

											res
													.error(function(data,
															status, headers,
															config) {
														noty({
															text : 'Erreur technique inattendu'
																	+ JSON
																			.stringify({
																				data : data
																			}),
															layout : 'topRight',
															type : 'error'
														});
													});

										}
									}, {
										addClass : 'btn btn-danger btn-clean',
										text : 'Cancel',
										onClick : function($noty) {
											$noty.close();
										}
									} ]
						})

					};
					/**
					 * get all Users
					 */
					$scope.loadAll = function() {
						/*var res = $http.get('utilisateur/getAll', {
							headers : $scope.createAuthorizationTokenHeader()
						});*/
					delete $http.defaults.headers.common['X-Requested-With'];
					var token = $scope.getJwtToken();
					 $http({
				            method: 'GET',
				            url: '/getAllUsers',
				            params: 'limit=10, sort_by=created:desc',
				            headers: {'Authorization': token}
				        }).success(function(data){
				        	$scope.utilisateurs = data;
				            // With the data succesfully returned, call our callback
				            callbackFunc(data);
				        }).error(function(){
				            alert("error");
				        });
						/*var token = $scope.getJwtToken();
						var res = $http({
							    method: 'GET',
							    url: '/getAllUsers',                                   
							    headers: {
							        'Authorization': token,
							        'Content-Type': 'application/json'
							    }
							});

						res.success(function(data, status, headers, config) {
							$scope.utilisateurs = data;
						});

						res.error(function(data, status, headers, config) {
							noty({
								text : 'Erreur technique inattendu'
										+ JSON.stringify({
											data : data
										}),
								layout : 'topRight',
								type : 'error'
							});
						});*/
					};

					/**
					 * recherche par nom
					 */
					$scope.recherche = function() {

						var res = $http.post("utilisateur/find",
								$scope.userRecherche);

						res.success(function(data, status, headers, config) {
							$scope.utilisateurs = data;
						});
						res.error(function(data, status, headers, config) {
							noty({
								text : 'Erreur technique inattendu'
										+ JSON.stringify({
											data : data
										}),
								layout : 'topRight',
								type : 'error'
							});
						});

					};

					setTimeout(function() {
						$scope.loadAll();

					}, 500);

				});