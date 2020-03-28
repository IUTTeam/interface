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
			
			await this.donneeDAO.recupererDonnee("temperature", "C");
			let types = await this.typeDAO.recupererType();
			this.vueDonnees.afficher(types);
		}
	}
}
