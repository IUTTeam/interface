class VueDonnees {

	constructor() {

		this.pageDonnee = document.getElementById("page-donnees").innerHTML;
	}

	afficher(types) {

		let sidebar = document.getElementById("types");
		let elementBody = document.getElementsByTagName("main")[0];

		let textSidebar = "";

		types.forEach(type => {
			
			textSidebar += "<li><a href='#'><i class='material-icons'>data_usage</i>" + type + "</a></li>";
		});

		sidebar.innerHTML += textSidebar;
        elementBody.innerHTML = this.pageDonnee;
	}
} 
