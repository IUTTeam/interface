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
			
			this.vueDonnees.afficher(types);
		}
	}
}
