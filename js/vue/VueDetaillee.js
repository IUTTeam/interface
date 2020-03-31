class VueDetaillee {

	constructor() {

		this.pageDetaillee = document.getElementById("page-detaillee").innerHTML;
	}

	afficher(types, typeVoulu, moyennePourGraphe,stats, tableauLabel) {

        let elementBody = document.getElementsByTagName("main")[0];
        document.getElementById("hidden").style.display = 'none';
        document.getElementById("titre").innerHTML = this.capitalizeFirstLetter(typeVoulu.type) + " " + this.capitalizeFirstLetter(typeVoulu.unite);

		elementBody.innerHTML = this.pageDetaillee;

		let sidebar = document.getElementById("types");

		let textSidebar = "<li><a href='#'>Données disponibles</a></li><li><div class='divider'></div></li>";

		types.forEach(type => {
			
			textSidebar += "<li><a href='#" + type.type + "'><i class='material-icons blue-grey-text text-lighten-1'>data_usage</i>" + this.capitalizeFirstLetter(type.type) + "</a></li>";
		});

		let textAccueil = this.creerDivs(typeVoulu,stats);

        elementBody.innerHTML = textAccueil;
        sidebar.innerHTML = textSidebar;

		this.afficherGraphique(".ct-chart1", moyennePourGraphe[0].reverse(),tableauLabel[0]);

		this.afficherGraphique(".ct-chart2", moyennePourGraphe[1].reverse(),tableauLabel[1]);

		this.afficherGraphique(".ct-chart3", moyennePourGraphe[2].reverse(),tableauLabel[2]);

		this.afficherGraphique(".ct-chart4", moyennePourGraphe[3].reverse(),tableauLabel[3]);
	}

	creerDivs(typeVoulu,stats) {

		let textAccueil = "";

		textAccueil += "<div class='row'><div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block waves-light green lighten-1 marge bord-arrondi'><div class='ct-chart1 ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>Dernière heure<i class='material-icons right'>more_vert</i></span></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Statistiques<i class='material-icons right'>close</i></span></br><div class='black-text'>Minimum : " + stats[0].min.toFixed(2) + " " + typeVoulu.unite +"</div></br><div class='black-text'>Moyenne : " + stats[0].moyenne.toFixed(2) + " " + typeVoulu.unite +"</div></br><div class='black-text'>Maximum : " + stats[0].max.toFixed(2) + " " + typeVoulu.unite +"</div></div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block amber darken-4 marge bord-arrondi'><div class='ct-chart2 ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>Dernier jour<i class='material-icons right'>more_vert</i></span></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Statistiques<i class='material-icons right'>close</i></span></br><div class='black-text'>Minimum : " + stats[1].min.toFixed(2) + " " + typeVoulu.unite +"</div></br><div class='black-text'>Moyenne : " + stats[1].moyenne.toFixed(2) + " " + typeVoulu.unite +"</div></br><div class='black-text'>Maximum : " + stats[1].max.toFixed(2) + " " + typeVoulu.unite +"</div></div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block deep-purple accent-1 marge bord-arrondi'><div class='ct-chart3 ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>Dernier mois<i class='material-icons right'>more_vert</i></span></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Statistiques<i class='material-icons right'>close</i></span></br><div class='black-text'>Minimum : " + stats[2].min.toFixed(2) + " " + typeVoulu.unite +"</div></br><div class='black-text'>Moyenne : " + stats[2].moyenne.toFixed(2) + " " + typeVoulu.unite +"</div></br><div class='black-text'>Maximum : " + stats[2].max.toFixed(2) + " " + typeVoulu.unite +"</div></div></div></div>";
		textAccueil += "<div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block deep-orange accent-3 marge bord-arrondi'><div class='ct-chart4 ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>Dernière année<i class='material-icons right'>more_vert</i></span></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>Statistiques<i class='material-icons right'>close</i></span></br><div class='black-text'>Minimum : " + stats[3].min.toFixed(2) + " " + typeVoulu.unite +"</div></br><div class='black-text'>Moyenne : " + stats[3].moyenne.toFixed(2) + " " + typeVoulu.unite +"</div></br><div class='black-text'>Maximum : " + stats[3].max.toFixed(2) + " " + typeVoulu.unite +"</div></div></div></div></div>";


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

  			height: '19em'
  		};
		new Chartist.Line(nomClass, data, options);
	}
} 
