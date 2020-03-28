class Application {

	constructor() {

		this.vueDonnees = new VueDonnees;
		this.typeDAO = new TypeDAO;

		window.addEventListener("hashchange", function() {
			this.naviguer();
		});
		this.naviguer();
	}

	async naviguer() {
		let hash = window.location.hash;

		if (!hash) {
			let types = await this.typeDAO.recupererType();
			this.vueDonnees.afficher(types);
		}
	}
}
