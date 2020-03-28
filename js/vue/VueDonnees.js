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

		let textAccueil = this.creerDivs(types);

		sidebar.innerHTML += textSidebar;
		elementBody.innerHTML += this.pageDonnee;
		elementBody.innerHTML += textAccueil;
		var data = {
			labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
			series: [[5, 2, 4, 2, 0]]
		};
		new Chartist.Line('.ct-chart', data);
	}

	creerDivs(types) {

		let textAccueil = "";

		if(types.length == 2) {

			textAccueil += "<div class='row'><div class='col s6'>" + types[0] + "<div class='ct-chart ct-perfect-fourth'></div></div>";
			textAccueil += "<div class='col s6'>" + types[1] + "</div></div>";
		} else {

			textAccueil += "<div class='row'><div class='col s4'>" + types[0] + "</div>";
			textAccueil += "<div class='col s4'>" + types[1] + "</div>";
			textAccueil += "<div class='col s4'>" + types[2] + "</div></div>";
		}

		return textAccueil;
	}
} 
