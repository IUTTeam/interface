class VueDetaillee {

	constructor() {

		this.pageDetaillee = document.getElementById("page-detaillee").innerHTML;
	}

	afficher(types, typeVoulu, moyennePourGraphe) {

        let elementBody = document.getElementsByTagName("main")[0];
        document.getElementById("hidden").style.display = 'none';
        document.getElementById("titre").innerHTML = this.capitalizeFirstLetter(typeVoulu.type) + " " + this.capitalizeFirstLetter(typeVoulu.unite);

		elementBody.innerHTML = this.pageDetaillee;

		let sidebar = document.getElementById("types");

		let textSidebar = "";

		types.forEach(type => {
			
			textSidebar += "<li><a href='#" + type.type + "'><i class='material-icons blue-grey-text text-lighten-1'>data_usage</i>" + this.capitalizeFirstLetter(type.type) + "</a></li>";
		});

		let textAccueil = this.creerDivs(typeVoulu);

        elementBody.innerHTML = textAccueil;
        sidebar.innerHTML = textSidebar;

		this.afficherGraphique(".ct-chart1", moyennePourGraphe[0].reverse(),['ok','dac']);

		this.afficherGraphique(".ct-chart2", moyennePourGraphe[1].reverse(),['ok','dac']);

		this.afficherGraphique(".ct-chart3", moyennePourGraphe[2].reverse(),['ok','dac']);

		this.afficherGraphique(".ct-chart4", moyennePourGraphe[3].reverse(),['ok','dac']);
	}

	creerDivs(typeVoulu) {

		let textAccueil = "";

		textAccueil += "<div class='row'><div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block waves-light green lighten-1 marge bord-arrondi'><div class='ct-chart1 ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>Dernière heure</div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block amber darken-4 marge bord-arrondi'><div class='ct-chart2 ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>Dernier jour</span></div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block deep-purple accent-1 marge bord-arrondi'><div class='ct-chart3 ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>Dernier mois</span></div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block deep-orange accent-3 marge bord-arrondi'><div class='ct-chart4 ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>Dernière année</span></div></div></div></div>";

		return textAccueil;
	}

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
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

  			height: '14em'
  		};
		new Chartist.Line(nomClass, data, options);
	}
} 
