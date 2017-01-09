'use strict';

var walletApp = angular.module('walletApp', ['jcs-autoValidate']);
walletApp
.run([
		'defaultErrorMessageResolver',
		function(defaultErrorMessageResolver) {
			defaultErrorMessageResolver
					.getErrorMessages()
					.then(
							function(errorMessages) {
								// gestion evenement view
								errorMessages['reqLibelle'] = 'entrez votre libelle ';
								// gestion affectation view
								errorMessages['reqCompteDebit'] = 'entrez le debit de compte ';
								errorMessages['reqCompteCredit'] = 'entrez le credit de compte ';
								//transaction
								errorMessages['reqMontant'] = 'entrez le montant ';
								
								

							});
		} ]);
walletApp
		.run([
				'defaultErrorMessageResolver',
				function(defaultErrorMessageResolver) {
					// passing a culture into getErrorMessages('fr-fr') will get
					// the culture specific messages
					// otherwise the current default culture is returned.
					defaultErrorMessageResolver
							.getErrorMessages()
							.then(
									function(errorMessages) {
										errorMessages['reqLibelle'] = 'entrez votre libelle ';
										errorMessages['reqLibelleposte'] = 'entrez votre libelle ';
										errorMessages['reqnom'] = 'entrez votre nom ';
										
											
									});
				} ]);
				
	