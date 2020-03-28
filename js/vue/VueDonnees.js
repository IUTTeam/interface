class VueDonnees {

	constructor() {

		this.pageDonnee = document.getElementById("page-donnees").innerHTML;
	}

	afficher(types) {

		let sidebar = document.getElementById("types");
		let elementBody = document.getElementsByTagName("main")[0];

		let textSidebar = "";

		types.forEach(type => {
			
			textSidebar += "<li><a href='#'><i class='material-icons'>data_usage</i>" + type.type + "</a></li>";
		});

		let textAccueil = this.creerDivs(types);

		sidebar.innerHTML += textSidebar;
		
		elementBody.innerHTML += this.pageDonnee;
		elementBody.innerHTML += textAccueil;

		var data = {
			labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
			series: [[5, 2, 4, 2, 0]]
		};
		var options = {
  			// Don't draw the line chart points
  			showPoint: true,
 			 // Disable line smoothing
  			lineSmooth: true,
  		};
		new Chartist.Line('.ct-chart', data, options);
	}

	creerDivs(types) {

		let textAccueil = "";

		if(types.length == 2) {

			textAccueil += "<div class='row'><div class='col s6'>" + types[0].type + "<div class='ct-chart ct-perfect-fourth ct-series-a'></div>";
			textAccueil += "<div class='col s6'>" + types[1].type + "</div></div>";
		} else {

			textAccueil += "<div class='row'><div class='col s4'>" + types[0].type + "<div class='ct-chart ct-perfect-fourth ct-series-a'></div></div>";
			textAccueil += "<div class='col s4'>" + types[1].type + "</div>";
			textAccueil += "<div class='col s4'>" + types[2].type + "</div></div>";
		}

		return textAccueil;
	}
} 
