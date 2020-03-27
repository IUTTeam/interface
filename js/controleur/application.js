class Application {

	constructor() {
		console.log("Constructeur de la classe Application.");

		this.vueDonnees = new VueDonnees;

		window.addEventListener("hashchange", function() {
			this.naviguer();
		});
		this.naviguer();
	}

	naviguer() {
		let hash = window.location.hash;

		if (!hash) {
			this.vueDonnees.afficher();
		}
	}
}
