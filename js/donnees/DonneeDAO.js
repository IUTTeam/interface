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
        console.log(timestamp - this.nombreDeSecondesDepuisDebutDuMois());
        

        for (let i = 0; i < 12; i++) {
            
            if(i === 0) {

                intervalle += "[" + (timestamp - this.nombreDeSecondesDepuisDebutDuMois()) + "," + timestamp + "],";
                timestamp = timestamp - this.nombreDeSecondesDepuisDebutDuMois();
            }
            else
                intervalle += "[" + (timestamp - this.NOMBRE_SECONDES_MOIS * (i + 1)) + "," + (timestamp - this.NOMBRE_SECONDES_MOIS * i) + "],";
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