(function () {

	let vueDonnees;
	let typeDAO;
	let donneeDAO;
	let vueDetaillee;

	var initialiser = function () {

		vueDonnees = new VueDonnees;
		typeDAO = new TypeDAO;
		donneeDAO = new DonneeDAO;
		vueDetaillee = new VueDetaillee;
		window.addEventListener("hashchange", naviguer);
		naviguer();
	};

	var naviguer = async function () {

		var hash = window.location.hash;
		let types = await typeDAO.recupererType();

		if (!hash) {

			let moyennesPourGraphe = await donneeDAO.recupererMoyennesDonneesQuotidiennes(types);
			//await this.donneeDAO.recupererDonneePourPageSpecifique(types[0]);

			for (let j = 0; j < moyennesPourGraphe.length; j++) {
				for (let i = 0; i < moyennesPourGraphe[j].length; i++) {
					if (!moyennesPourGraphe[j][i]) {
						moyennesPourGraphe[j][i] = 0;
					}
				}
			}

			vueDonnees.afficher(types, moyennesPourGraphe);
		} else {

			let typeVoulu;

			types.forEach(type => {
				if(type.type == hash.substring(1))
					typeVoulu = type;
			});

			let moyennesPourGraphe = await donneeDAO.recupererDonneePourPageSpecifique(typeVoulu);

			for (let j = 0; j < moyennesPourGraphe.length; j++) {
				for (let i = 0; i < moyennesPourGraphe[j].length; i++) {
					if (!moyennesPourGraphe[j][i]) {
						moyennesPourGraphe[j][i] = 0;
					}
				}
			}
			vueDetaillee.afficher(types,moyennesPourGraphe);
		}
	}

	initialiser();
})();