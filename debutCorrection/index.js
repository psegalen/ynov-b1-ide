var couleurs = [
  "red",
  "blue",
  "green",
  "black",
  "gray",
  "purple",
  "orange",
  "yellow",
  "cyan",
  "magenta"
];
var indiceCouleurActuelle = 0;

function changerToutesCouleurs() {
  var carres = document.getElementsByClassName("carre");
  for (var i = 0; i < carres.length; i++) {
    changerCouleur(carres[i]);
  }
}

function cliqueCarre(evt) {
  changerCouleur(evt.target);
}

function changerCouleur(carre) {
  var indiceCouleurCarre = couleurs.indexOf(
    carre.style.backgroundColor || "red"
  );
  carre.style.backgroundColor =
    couleurs[(indiceCouleurCarre + 1) % couleurs.length];
}

function ajouterCarre() {
  var carres = document.querySelector(".carres");
  var nouveauCarre = document.createElement("canvas");
  nouveauCarre.className = "carre";
  nouveauCarre.addEventListener("click", cliqueCarre);
  carres.appendChild(nouveauCarre);
}

function enleverCarre() {
  var carres = document.querySelector(".carres");
  carres.removeChild(carres.lastChild);
}
