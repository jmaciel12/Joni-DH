const form = document.querySelector(".form-contact");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const terms = document.querySelector("#terms");
const buttonSubmit = document.querySelector(".button-submit");

buttonSubmit.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "#0056b3";
});

buttonSubmit.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = false;

  if (email.value === "") {
    alert("Por favor complete el campo email");
    errors = true;
  }

  if (password.value === "") {
    alert("Por favor complete el campo contraseña");
    errors = true;
  }

  if (!errors) {
    location.href = "index.html";
  }
});
