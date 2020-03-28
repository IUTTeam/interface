class VueDonnees {

	constructor() {

		this.pageDonnee = document.getElementById("page-donnees").innerHTML;
	}

	afficher() {
		let elementBody = document.getElementsByTagName("main")[0];
        elementBody.innerHTML = this.pageDonnee;
	}
}
