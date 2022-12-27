const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm");
const form = document.querySelector("form");
const button = document.querySelector("button");
const span = document.querySelector(".password ~ span");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", () => {
  if (password.value != confirmPassword.value) {
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
    span.textContent = "* Passwords do not match";
    span.classList.add("invalid");
  } else {
    password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    span.textContent = "";
    span.classList.remove("invalid");
  }
});

