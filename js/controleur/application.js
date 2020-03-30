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
			await this.donneeDAO.recupererDonneePourPageSpecifique(types[0]);

			for (let j = 0; j < moyennesPourGraphe.length;j++) {
				for (let i = 0; i < moyennesPourGraphe[j].length; i++){
					if (!moyennesPourGraphe[j][i]) {
						moyennesPourGraphe[j][i] = 0;
					}
				}
			}
			
			this.vueDonnees.afficher(types,moyennesPourGraphe);
		}
	}
}
