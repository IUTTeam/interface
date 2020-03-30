class VueDetaillee {

	constructor() {

		this.pageDetaillee = document.getElementById("page-detaillee").innerHTML;
	}

	afficher(types,moyennePourGraphe) {

        let elementBody = document.getElementsByTagName("main")[0];

		elementBody.innerHTML = this.pageDetaillee;

		let sidebar = document.getElementById("types");

		let textSidebar = "";

		types.forEach(type => {
			
			textSidebar += "<li><a href='#" + type.type + "'><i class='material-icons blue-grey-text text-lighten-1'>data_usage</i>" + this.capitalizeFirstLetter(type.type) + "</a></li>";
		});

		let textAccueil = this.creerDivs(types);

		elementBody.innerHTML = textAccueil;

		this.afficherGraphique(".ct-chart1", moyennePourGraphe[0].reverse(),['ok','dac']);

		this.afficherGraphique(".ct-chart2", moyennePourGraphe[1].reverse(),['ok','dac']);

		this.afficherGraphique(".ct-chart3", moyennePourGraphe[2].reverse(),['ok','dac']);

		this.afficherGraphique(".ct-chart4", moyennePourGraphe[3].reverse(),['ok','dac']);

		console.log("ok");
	}

	creerDivs(types) {

		let textAccueil = "";

		textAccueil += "<div class='row'><div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block waves-light green lighten-1 marge bord-arrondi'><div class='ct-chart1 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[0].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[0].unite) + "</span></span><p><div class='card-action'><a href='#" + types[0].type + "' class='blue-text text-lighten-4'>Consulter</a></div></p></div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block amber darken-4 marge bord-arrondi'><div class='ct-chart2 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[1].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[1].unite) + "</span></span><p><div class='card-action'><a href='#" + types[1].type + "' class='blue-text text-lighten-4'>Consulter</a></div></p></div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block amber darken-4 marge bord-arrondi'><div class='ct-chart3 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[1].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[1].unite) + "</span></span><p><div class='card-action'><a href='#" + types[1].type + "' class='blue-text text-lighten-4'>Consulter</a></div></p></div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block deep-orange accent-3 marge bord-arrondi'><div class='ct-chart4 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[2].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[2].unite) + "</span></span><p><div class='card-action'><a href='#" + types[2].type + "' class='blue-text text-lighten-4'>Consulter</a></div></p></div></div></div></div>";

		return textAccueil;
	}

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	afficherGraphique(nomClass,tableauValeur,tableauLabel){	
		console.log(tableauValeur)
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
} 
