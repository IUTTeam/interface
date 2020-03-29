class Application {

	constructor() {

		this.vueDonnees = new VueDonnees;
		this.typeDAO = new TypeDAO;
		this.donneeDAO = new DonneeDAO;

		window.addEventListener("hashchange", function() {
			this.naviguer();
		});
		this.naviguer();
	}

	async naviguer() {
		let hash = window.location.hash;

		if (!hash) {
		
			let types = await this.typeDAO.recupererType();
			let moyennesPourGraphe = await this.donneeDAO.recupererMoyennesDonneesQuotidiennes(types);
			console.log(moyennesPourGraphe);

			for (let i = 0; i < moyennesPourGraphe[0].length; i++){
				if (!moyennesPourGraphe[0][i]) {
					console.log("okok");
					moyennesPourGraphe[0][i] = 0;
				}
			}

			console.log(moyennesPourGraphe);
			
			this.vueDonnees.afficher(types,moyennesPourGraphe);
		}
	}
}
