var messagesErreur = [
  "Votre nom ne peut être vide",
  "Votre nom doit avoir une longueur d'au moins 3 caractères",
  "Votre nom doit être complet (nom prénom), vous n'avez pas entré d'espace",
  "Votre mot de passe ne peut être vide",
  "Votre mot de passe doit faire au moins 6 caractères et contenir au moins une majuscule, une minuscule et un chiffre",
  "Votre date de naissance doit être au format jj/mm/aaaa",
  "Vous devez avoir 18 ans pour vous inscrire"
];

function inscrire() {
  var nomEstValide = validerNom();
  var passEstValide = validerMotDePasse();
  var dateEstValide = validerDateNaissance();
  if (nomEstValide && passEstValide && dateEstValide) {
    alert("Ok");
  }
}

function validerDateNaissance() {
  var champDate = document.getElementById("dateNaissance");
  var erreurDate = document.getElementById("errorDate");
  var dateString = champDate.value;
  var morceaux = dateString.split("/");
  if (morceaux.length != 3) {
    erreurDate.innerText = messagesErreur[5];
    return false;
  } else {
    var jour = parseInt(morceaux[0]);
    var mois = parseInt(morceaux[1]);
    var annee = parseInt(morceaux[2]);
    var date = new Date(annee, mois - 1, jour);
    if (
      mois > 12 ||
      mois < 1 ||
      jour > 31 ||
      jour < 1 ||
      annee > new Date().getFullYear()
    ) {
      erreurDate.innerText = messagesErreur[5];
      return false;
    }
    // On cherche le 18 anniversaire de l'utilisateur
    var ses18ans = new Date(date.getTime() + 18 * 365.25 * 24 * 3600 * 1000);
    if (ses18ans > new Date()) {
      erreurDate.innerText = messagesErreur[6];
      return false;
    }
    erreurDate.innerText = "";
    return true;
  }
}

function validerPass(pass) {
  if (pass.length < 6) {
    return false;
  } else {
    var auMoins1Maj = false,
      auMoins1Min = false,
      auMoins1Chiffre = false;
    for (let i = 0; i < pass.length; i++) {
      const caractere = pass.charAt(i);
      if (caractere.toLowerCase() !== caractere) {
        // C'est une majuscule !
        auMoins1Maj = true;
      } else if (caractere.toUpperCase() !== caractere) {
        // C'est une minuscule !
        auMoins1Min = true;
      } else if (!isNaN(caractere)) {
        // C'est un chiffre !
        auMoins1Chiffre = true;
      }
    }
    return auMoins1Chiffre && auMoins1Maj && auMoins1Min;
  }
  /*
  // Version expression régulière
  var reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/);
  return reg.test(pass);
  */
}

function validerMotDePasse() {
  var champPass = document.getElementById("motDePasse");
  var erreurPass = document.getElementById("errorPass");
  if (champPass.value.length == 0) {
    // Le mot de passe est vide
    erreurPass.innerText = messagesErreur[3];
    return false;
  } else if (!validerPass(champPass.value)) {
    erreurPass.innerText = messagesErreur[4];
    return false;
  } else {
    erreurPass.innerText = "";
    return true;
  }
}

function validerNom() {
  var champNom = document.getElementById("nom");
  var erreurNom = document.getElementById("errorNom");
  if (champNom.value.length == 0) {
    // Le nom est vide
    erreurNom.innerText = messagesErreur[0];
    return false;
  } else if (champNom.value.length < 3) {
    erreurNom.innerText = messagesErreur[1];
    return false;
  } else if (champNom.value.indexOf(" ") == -1) {
    erreurNom.innerText = messagesErreur[2];
    return false;
  } else {
    erreurNom.innerText = "";
    return true;
  }
}
