class DonneeDAO {

    constructor() {
        this.NOMBRE_SECONDES_MOIS = 2628000;
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

    creerJSON(type, unite) {

        let interval = this.getIntervalleAnnee();

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

            intervalle += "[" + (timestamp - this.NOMBRE_SECONDES_MOIS * (i + 1)) + "," + (timestamp - this.NOMBRE_SECONDES_MOIS * i) + "],";
        }

        intervalle = intervalle.substring(0, intervalle.length - 1);

        return intervalle;
    }
}