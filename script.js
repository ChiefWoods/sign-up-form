const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm');
const button = document.querySelector('button[form="create-account"]');

function validateSamePassword() {
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity('Passwords do not match.');
    password.classList.add('error');
    confirmPassword.classList.add('error');
  } else {
    password.setCustomValidity('');
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
});

button.addEventListener('click', () => {
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  })
  if (password.value !== '' && confirmPassword.value !== '') {
    validateSamePassword();
  }
  if (form.checkValidity()) {
    form.submit();
  }
})
