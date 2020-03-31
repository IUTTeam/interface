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

	afficher(types,moyennesPourGraphe,tableauLabel) {

		let sidebar = document.getElementById("types");
		let elementBody = document.getElementsByTagName("main")[0];

		document.getElementById("hidden").style.display = 'block';
		document.getElementById("titre").innerHTML = 'Accueil';

		let textSidebar = "<li><a href='#'>Données disponibles</a></li><li><div class='divider'></div></li>";

		types.forEach(type => {
			
			textSidebar += "<li><a href='#" + type.type + "'><i class='material-icons blue-grey-text text-lighten-1'>data_usage</i>" + this.capitalizeFirstLetter(type.type) + "</a></li>";
		});

		let textAccueil = this.creerDivs(types);

		sidebar.innerHTML = textSidebar;

		elementBody.innerHTML = textAccueil;
		elementBody.innerHTML += this.pageDonnee;
		document.getElementById("nbCapteur").innerHTML = types.length;
		
		this.afficherGraphique(".ct-chart1" ,moyennesPourGraphe[0].reverse(), tableauLabel);
		this.afficherGraphique(".ct-chart2" ,moyennesPourGraphe[1].reverse(), tableauLabel);
		this.afficherGraphique(".ct-chart3" ,moyennesPourGraphe[2].reverse(), tableauLabel);

	}

	creerDivs(types) {

		let textAccueil = "";

		if(types.length == 2) {

			textAccueil += "<div class='row marge-menu'><div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block amber darken-4 marge bord-arrondi'><div class='ct-chart2 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[0].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[0].unite) + "</span></span><p><a href='#" + types[0].type + "' class='blue-text text-lighten-4'>Consulter</a></p></div></div></div>";
			textAccueil += "<div class='row marge-menu'><div class='col l6 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block deep-orange accent-3 marge bord-arrondi'><div class='ct-chart3 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[1].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[1].unite) + "</span></span><p><a href='#" + types[0].type + "' class='blue-text text-lighten-4'>Consulter</a></p></div></div></div></div>";

		} else {

			textAccueil += "<div class='row marge-menu'><div class='col l4 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block waves-light green lighten-1 marge bord-arrondi'><div class='ct-chart1 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[0].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[0].unite) + "</span></span><p><div class='card-action'><a href='#" + types[0].type + "' class='blue-text text-lighten-4'>Consulter</a></div></p></div></div></div>";
			textAccueil += "<div class='col l4 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block amber darken-4 marge bord-arrondi'><div class='ct-chart2 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[1].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[1].unite) + "</span></span><p><div class='card-action'><a href='#" + types[1].type + "' class='blue-text text-lighten-4'>Consulter</a></div></p></div></div></div>";
			textAccueil += "<div class='col l4 m12'><div class='card marge-top' id='couleurDuBoss'><div class='card-image waves-effect waves-block deep-orange accent-3 marge bord-arrondi'><div class='ct-chart3 ct-perfect-fourth ct-series-a'></div></div><div class='card-content'><span class='card-title activator'>" + this.capitalizeFirstLetter(types[2].type) + "<span id='padding'>" + this.capitalizeFirstLetter(types[2].unite) + "</span></span><p><div class='card-action'><a href='#" + types[2].type + "' class='blue-text text-lighten-4'>Consulter</a></div></p></div></div></div></div>";
		}

		return textAccueil;
	}

	capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
} 
