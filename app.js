let inputName = document.querySelector("#inputName");

inputName.addEventListener("change", function (event) {
  if(inputName.validity.patternMismatch) {
    inputName.setCustomValidity("Veillez mettre une majuscule a la première lettre de votre nom");
  } else {
    inputName.setCustomValidity("");
  }
});

let inputPassword = document.querySelector("#inputPassword");

inputPassword.addEventListener("keyup", function (event) {
  if(inputPassword.validity.patternMismatch) {
    inputPassword.setCustomValidity("il faut au minimum 8 caractère, une majuscule, et un chiffre");
  } else {
    inputPassword.setCustomValidity("");
  }
});

let inputEmail = document.querySelector("#inputEmail");

inputEmail.addEventListener("keyup", function (event) {
  if(inputEmail.validity.patternMismatch) {
    inputEmail.setCustomValidity("Le format du mail n'est pas valide");
  } else {
    inputEmail.setCustomValidity("");
  }
});

if (inputName.validity && inputPassword.validity && inputEmail.validity) {
    alert("Bienvenue l'artiste");
};

