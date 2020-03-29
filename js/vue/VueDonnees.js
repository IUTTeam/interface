class VueDonnees {

	constructor() {

		this.pageDonnee = document.getElementById("page-donnees").innerHTML;
	}

	afficher(types,moyennesPourGraphe) {

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
			labels: ['1', '2', '3', '4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','20','21','22','23','24'],
			series: [moyennesPourGraphe[0]]
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

			textAccueil += "<div class='background-vert row'><div class='col s6'>" + types[0].type + "<div class='ct-chart ct-perfect-fourth ct-series-a '></div>";
			textAccueil += "<div class='col s6'>" + types[1].type + "</div></div>";


		} else {

			textAccueil += "<div class='row'><div class='col s4'><div class='card'><div class='card-image waves-effect waves-block waves-light background-vert'><div class='ct-chart ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator grey-text text-darken-4'>" + types[0].type + "</span><p><a href='#'>Consulter</a></p></div></div></div>";
			textAccueil += "<div class='col s4'>" + types[1].type + "</div>";
			textAccueil += "<div class='col s4'>" + types[2].type + "</div></div>";
		}

		return textAccueil;
	}
} 
