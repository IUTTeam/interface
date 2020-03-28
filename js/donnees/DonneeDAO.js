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
                return reponse.text();
            })
            .then(function (json) {
                resultat = JSON.parse(json);
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

        for (let i = 0; i < 12; i++) {


            intervalle += "[" + (Date.now() - this.NOMBRE_SECONDES_MOIS * (i + 1)) + "," + (Date.now() - this.NOMBRE_SECONDES_MOIS * i) + "],";
        }

        intervalle = intervalle.substring(0, intervalle.length - 1);

        return intervalle;
    }
}