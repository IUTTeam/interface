class DonneeDAO {

    constructor() {
        this.NOMBRE_SECONDES_MOIS = 2628000;
        this.NOMBRE_SECONDES_JOUR = 86400;
    }

    async recupererMoyennesDonneesQuotidiennes(type) {

        let moyennes = [];

        for (let i = 0; i < type.length; i++) {

            let json = this.creerJSON(type[i].type, type[i].unite);
            var resultat;
            var url = "https://service.frfr.duckdns.org/request_data?donnees=" + encodeURIComponent(json);
            let reponse = await fetch(url)
                .then(function (reponse) {
                    //console.log(reponse);
                    return reponse.text();
                })
                .then(function (json) {
                    resultat = JSON.parse(json);
                });
            moyennes.push(this.getMoyennePourGraphique(resultat));
        }

        return moyennes;
    }

    async recupererDonnee(type, unite) {

        let json = this.creerJSON(type, unite);

        var resultat;
        var url = "https://service.frfr.duckdns.org/request_data?donnees=" + encodeURIComponent(json);
        let reponse = await fetch(url)
            .then(function (reponse) {
                //console.log(reponse);
                return reponse.text();
            })
            .then(function (json) {
                resultat = JSON.parse(json);
                console.log(resultat);
            });
        return resultat;
    };

    getMoyennePourGraphique(json) {

        let moyenne = [];

        for(let i = 0; i < 31; i++) {

            moyenne.push(json.statsDonnees[i].moyenne);
        }

        return moyenne;
    }

    creerJSON(type, unite) {

        let interval = this.getIntervalleMois();

        var text = '{"type":"' + type + '",' +
            '"unite":"' + unite + '",' +
            '"intervalles":[' +
            interval +
            ']' +
            '}';

        return text;
    }

    getIntervalleAnnee() {

        let intervalle = "";
        let timestamp = Date.now() / 1000;

        for (let i = 0; i < 12; i++) {

            if (i === 0) {

                intervalle += "[" + (timestamp - this.nombreDeSecondesDepuisDebutDuMois()) + "," + timestamp + "],";
                timestamp = timestamp - this.nombreDeSecondesDepuisDebutDuMois();
            }
            else
                intervalle += "[" + (timestamp - this.NOMBRE_SECONDES_MOIS * (i + 1)) + "," + (timestamp - this.NOMBRE_SECONDES_MOIS * i) + "],";
        }

        intervalle = intervalle.substring(0, intervalle.length - 1);

        return intervalle;
    }

    getIntervalleMois() {

        let intervalle = "";
        let timestamp = Date.now() / 1000;

        for (let i = 0; i < 31; i++) {

            intervalle += "[" + (timestamp - this.NOMBRE_SECONDES_JOUR * (i + 1)) + "," + (timestamp - this.NOMBRE_SECONDES_JOUR * i) + "],";
        }

        intervalle = intervalle.substring(0, intervalle.length - 1);

        return intervalle;
    }

    nombreDeSecondesDepuisDebutDuMois() {

        var now = new Date().getTime(),
            monthStart = new Date();

        monthStart.setDate(1);
        monthStart.setHours(0);
        monthStart.setMinutes(0);
        monthStart.setSeconds(0);
        monthStart.setMilliseconds(0);
        return Math.floor((now - monthStart.getTime()) / 1000);
    }
}