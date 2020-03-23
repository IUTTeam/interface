(function() {

    var initialiser = function() {
      window.addEventListener("hashchange", naviguer);
      naviguer();
    };
  
    var naviguer = function() {
  
      var hash = window.location.hash;
  
      if (!hash) {
  
        var vueDonnees = new VueDonnees();
        vueDonnees.afficher();
      } 
    }
  
    initialiser();
})();
  