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

function changerCouleur() {
  var divCarres = document.querySelector(".carres");
  var enfants = divCarres.childNodes;
  for (let i = 0; i < enfants.length; i++) {
    const element = enfants[i];
    if (element.className == "carre") {
      changerCouleurCarre(element);
    }
  }
}

function ajouterCarre() {
  var divCarres = document.querySelector(".carres");
  var nouveauCarre;
  if (divCarres.hasChildNodes()) {
    nouveauCarre = divCarres.childNodes[0].cloneNode();
  } else {
    nouveauCarre = document.createElement("canvas");
    nouveauCarre.className = "carre";
    nouveauCarre.style.backgroundColor = couleurs[indiceCouleurActuelle];
  }
  nouveauCarre.addEventListener("click", gererClic);
  divCarres.appendChild(nouveauCarre);
}

function enleverCarre() {
  var divCarres = document.querySelector(".carres");
  if (divCarres.hasChildNodes()) {
    divCarres.removeChild(divCarres.lastChild);
  }
}

function changerCouleurCarre(carre) {
  var couleur = carre.style.backgroundColor;
  if (couleur.length == 0) couleur = "red";
  var indiceCouleur = couleurs.indexOf(couleur);
  var nouvelleCouleur = couleurs[(indiceCouleur + 1) % couleurs.length];
  carre.style.backgroundColor = nouvelleCouleur;
}

function gererClic(event) {
  var carre = event.target;
  changerCouleurCarre(carre);
}

function init() {
  var carre = document.querySelector(".carre");
  carre.addEventListener("click", gererClic);
}
