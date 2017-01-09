var walletApp = angular.module('walletApp', [ 'ngRoute', 'ngAnimate',
	'jcs-autoValidate', 'ui.bootstrap']);

// configure our routes
walletApp
	.config(function($routeProvider) {
	    $routeProvider

		    .when('/', {
			templateUrl : 'parametrage/utilisateur/gestionDesUtilisateur.html'
		    })
		    // gestion des utilisateurs
		    .when(
			    '/Users',
			    {
				templateUrl : 'parametrage/utilisateur/gestionDesUtilisateur.html'
			    })
		    .when('/updateUsers', {
			templateUrl : 'parametrage/utilisateur/updateUser.html'
		    })
		    
		    // gestion des profils
		    .when(
			    '/profils',
			    {
				templateUrl : 'parametrage/utilisateur/gestionProfils.html'
			    })
		    .when(
			    '/updateProfils',
			    {
				templateUrl : 'parametrage/utilisateur/updateProfils.html'
			    })
		    

	});
