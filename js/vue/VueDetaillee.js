class VueDetaillee {

	constructor() {

		this.pageDetaillee = document.getElementById("page-detaillee").innerHTML;
	}

	afficher() {

        let elementBody = document.getElementsByTagName("main")[0];

		elementBody.innerHTML = this.pageDetaillee;
	}
} 
