(function () {

	let vueDonnees;
	let typeDAO;
	let donneeDAO;
	let vueDetaillee;

	var initialiser = function () {

		vueDonnees = new VueDonnees;
		typeDAO = new TypeDAO;
		donneeDAO = new DonneeDAO;
		vueDetaillee = new VueDetaillee;
		window.addEventListener("hashchange", naviguer);
		naviguer();
	};

	var naviguer = async function () {

		var hash = window.location.hash;
		let types = await typeDAO.recupererType();

		if (!hash) {

			tableauLabel = recupererTableauLabelHeure();

			let moyennesPourGraphe = await donneeDAO.recupererMoyennesDonneesQuotidiennes(types);
			//await this.donneeDAO.recupererDonneePourPageSpecifique(types[0]);

			for (let j = 0; j < moyennesPourGraphe.length; j++) {
				for (let i = 0; i < moyennesPourGraphe[j].length; i++) {
					if (!moyennesPourGraphe[j][i]) {
						moyennesPourGraphe[j][i] = 0;
					}
				}
			}

			vueDonnees.afficher(types, moyennesPourGraphe,tableauLabel);
		} else {

			let typeVoulu;

			let tableauLabel = recupererTableauLabel();

			types.forEach(type => {
				if(type.type == hash.substring(1))
					typeVoulu = type;
			});

			let moyennesPourGraphe = await donneeDAO.recupererDonneePourPageSpecifique(typeVoulu);

			for (let j = 0; j < moyennesPourGraphe.length; j++) {
				for (let i = 0; i < moyennesPourGraphe[j].length; i++) {
					if (!moyennesPourGraphe[j][i]) {
						moyennesPourGraphe[j][i] = 0;
					}
				}
			}
			vueDetaillee.afficher(types, typeVoulu, moyennesPourGraphe, donneeDAO.getStats(), tableauLabel);
		}
	}

	var recupererTableauLabelHeure = function() {
		let unSurDeux = true;
		let today = new Date();
		let heure = today.getHours();
		let tableauHeure = []
		for (let i = 0; i < 24 ; i++) {
			heure++;
			if (heure == 24) {
				heure = 0;
			}
			if (unSurDeux) {
				tableauHeure[i] = heure;
				unSurDeux = false;
			}else{
				unSurDeux = true;
			}
		}
		return tableauHeure;
	}

	var recupererTableauLabel = function() {
		let unSurDeux = true;
		let tableauLabel = [];
		let today = new Date();

		let heure = today.getHours();
		let tableauHeure = [];
		for (let i = 0; i < 24 ; i++) {
			heure++;
			if (heure >= 24) {
				heure = 0;
			}
			if (unSurDeux) {
				tableauHeure[i] = heure;
				unSurDeux = false;
			}else{
				tableauHeure[i] = "";
				unSurDeux = true;
			}
		}
		tableauLabel[1] = tableauHeure;

		unSurDeux = true;
		let minute = today.getMinutes()
		let tableauMinute = [];
		for (let i = 0; i < 30 ; i++) {
			minute+=2;
			if (minute == 60) {
				minute = 0;
			}else if (minute >= 61){
				minute = 1;
			}
			if (unSurDeux) {
				tableauMinute[i] = minute;
				unSurDeux = false;
			}else{
				tableauMinute[i] = "";
				unSurDeux = true;
			}
		}
		tableauLabel[0] = tableauMinute;


		let nomMois = [ "Jan", "Fev", "Mar", "Avr", "Mai", "Jui", 
           "Juil", "Aou", "Sep", "Oct", "Nov", "Dec" ];

		let annee = today.getMonth();
		let tableauAnnee = [];
		for (let i = 0; i < 12 ; i++) {
			annee++;
			if (annee >= 12) {
				annee = 0;
			}
			tableauAnnee[i] = nomMois[annee];
		}
		tableauLabel[3] = tableauAnnee;

		let tableauMois = [];
		unSurDeux = true;
		let mois = today.getDate();
		let nbJour;
		if (mois == 2){
			if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) {
				nbJour = 29;
			}else{
				nbJour = 28;
			}
		}else if (mois%2 == 0) {
			nbJour = 30;
		}else if (mois%2 == 1){
			nbJour = 31
		}
		for (let i = 0; i < nbJour ; i++){
			mois++;
			if (mois >= nbJour) {
				mois = 0;
			}
			if (unSurDeux) {
				tableauMois[i] = mois;
				unSurDeux = false;
			}else{
				tableauMois[i] = "";
				unSurDeux = true;
			}
		}
		tableauLabel[2] = tableauMois;


		return tableauLabel;
	}

	initialiser();
})();