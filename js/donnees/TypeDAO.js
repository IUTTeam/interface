class TypeDAO {


    async recupererType() {

        var resultat;
        var url = "https://service.frfr.duckdns.org/get_types";
        let reponse = await fetch(url)
            .then(function (reponse) {
                return reponse.text();
            })
            .then(function (json) {
                resultat = JSON.parse(json);                
            });
        return resultat.types;
    };
}