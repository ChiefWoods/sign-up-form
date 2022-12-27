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
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    })
  };
  if (!isPasswordSame()) {
    e.preventDefault();
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
    span.classList.add("help");
    console.log("not same");
  } else {
    password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    span.classList.remove("help");
    console.log("SAME");
  }
});


function isPasswordSame() {
  if (password.value !== confirmPassword.value || password.value === "" || confirmPassword.value === "") {
    return false;
  } else if (password.value === confirmPassword.value && password.value !== "") {
    return true;
  }
}