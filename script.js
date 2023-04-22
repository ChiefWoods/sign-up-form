// const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
// const firstName = document.querySelector('.first-name');
// const lastName = document.querySelector('.last-name');
// const email = document.querySelector('input[type="email"]');
// const phone = document.querySelector('input[type="tel"]');
// const password = document.querySelector('.password');
// const confirm = document.querySelector('.confirm');

// function checkSamePassword() {
//   return (password.value !== '' && confirm.value !== '' && password.value === confirm.value);
// }

inputs.forEach(input => input.addEventListener('input', e => {
  if (!e.target.validity.valid) {
    e.target.classList.add('error');
  } else {
    e.target.classList.remove('error');
  }
}))
