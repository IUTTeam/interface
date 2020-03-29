class VueDonnees {

	constructor() {

		this.pageDonnee = document.getElementById("page-donnees").innerHTML;
	}

	afficherGraphique(nomClass,tableauValeur,tableauLabel){	
		var data = {
			labels: tableauLabel,
			series: [tableauValeur]
		};
		var options = {
  			// Don't draw the line chart points
  			showPoint: true,
 			 // Disable line smoothing
  			lineSmooth: true,
  		};
		new Chartist.Line(nomClass, data, options);
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

		this.afficherGraphique(".ct-chart1" ,moyennesPourGraphe[0], ['', '', '', '','5','','','','','10','','','','','15','','','','','20','','','','24']);
		this.afficherGraphique(".ct-chart2" ,moyennesPourGraphe[1], ['', '', '', '','5','','','','','10','','','','','15','','','','','20','','','','24']);
		this.afficherGraphique(".ct-chart3" ,moyennesPourGraphe[2], ['', '', '', '','5','','','','','10','','','','','15','','','','','20','','','','24']);

	}

	creerDivs(types) {

		let textAccueil = "";

		if(types.length == 2) {

			textAccueil += "<div class='background-vert row'><div class='col s6'>" + types[0].type + "<div class='ct-chart ct-perfect-fourth ct-series-a '></div>";
			textAccueil += "<div class='col s6'>" + types[1].type + "</div></div>";


		} else {

			textAccueil += "<div class='row'><div class='col s4'><div class='card marge-top blue-grey darken-3'><div class='card-image waves-effect waves-block waves-light green lighten-1 marge bord-arrondi'><div class='ct-chart1 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator white-text'>" + types[0].type + "</span><p><a href='#' class='blue-text text-lighten-4'>Consulter</a></p></div></div></div>";
			textAccueil += "<div class='row'><div class='col s4'><div class='card marge-top blue-grey darken-3'><div class='card-image waves-effect waves-block amber darken-4 marge bord-arrondi'><div class='ct-chart2 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator white-text'>" + types[0].type + "</span><p><a href='#' class='blue-text text-lighten-4'>Consulter</a></p></div></div></div>";
			textAccueil += "<div class='row'><div class='col s4'><div class='card marge-top blue-grey darken-3'><div class='card-image waves-effect waves-block deep-orange accent-3 marge bord-arrondi'><div class='ct-chart3 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator white-text'>" + types[0].type + "</span><p><a href='#' class='blue-text text-lighten-4'>Consulter</a></p></div></div></div></div>";
		}

		return textAccueil;
	}
} 
