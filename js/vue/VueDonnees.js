var VueDonnees = (function() {
    pageDonnee = document.getElementById("page-donnees").innerHTML;
  
    return function() {

      this.afficher = function() {

        elementBody = document.getElementsByTagName("body")[0];
        elementBody.innerHTML = pageDonnee;
      }
    } 
})();