const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm");
const form = document.querySelector("form");
const span = document.querySelector(".password ~ span");
const inputs = document.querySelectorAll("input");

form.noValidate = true;

form.addEventListener("submit", e => {
  if (!e.target.checkValidity()) {
    e.preventDefault();
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    })
  };
  if (!isPasswordSame()) {
    e.preventDefault();
    password.classList.add("error");
    confirmPassword.classList.add("error");
    span.classList.add("help");
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    span.classList.remove("help");
  }
});


function isPasswordSame() {
  if (password.value !== confirmPassword.value || password.value === "" || confirmPassword.value === "") {
    return false;
  } else if (password.value === confirmPassword.value && password.value !== "") {
    return true;
  }
}