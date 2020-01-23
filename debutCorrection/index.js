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

function changerCouleur() {
  var carres = document.getElementsByClassName("carre");
  indiceCouleurActuelle = (indiceCouleurActuelle + 1) % couleurs.length;
  for (var i = 0; i < carres.length; i++) {
    carres[i].style.backgroundColor = couleurs[indiceCouleurActuelle];
  }
}

function ajouterCarre() {
  var carres = document.querySelector(".carres");
  var nouveauCarre = document.createElement("canvas");
  nouveauCarre.className = "carre";
  carres.appendChild(nouveauCarre);
}

function enleverCarre() {
  var carres = document.querySelector(".carres");
  carres.removeChild(carres.lastChild);
}
