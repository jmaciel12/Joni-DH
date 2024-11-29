const form = document.querySelector(".form-contact");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const terms = document.querySelector("#terms");

const invalidEmail = document.querySelector(".feedback-error.email");
const invalidPassword = document.querySelector(".feedback-error.password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = false;

  if (email.value === "") {
    invalidEmail.innerText = "Por favor complete el campo";
    invalidEmail.style.display = "block";
    errors = true;
  } else {
    invalidEmail.style.display = "none";
  }

  if (password.value === "") {
    invalidPassword.innerText = "Por favor complete el campo";
    invalidPassword.style.display = "block";
    errors = true;
  } else {
    invalidPassword.style.display = "none";
  }

  if (!errors) {
    location.href = "login.html";
  }
});
