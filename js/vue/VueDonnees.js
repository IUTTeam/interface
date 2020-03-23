var VueDonnees = (function() {
    pageDonnee = document.getElementById("page-donnees").innerHTML;
  
    return function() {

      this.afficher = function() {
        
        elementBody = document.getElementsByTagName("main")[0];
        elementBody.innerHTML = pageDonnee;
      }
    } 
})();