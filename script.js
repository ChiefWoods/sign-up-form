const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm');
const submitBtn = document.querySelector('button[type="submit"]');

function toggleControlStatus(ele) {
  if (ele.checkValidity()) {
    ele.classList.remove('error');
    
    ele.value.length
    ? ele.classList.add('success')
    : ele.classList.remove('success');
    
    ele.nextElementSibling.textContent = '';
  } else {
    ele.classList.remove('success');
    ele.classList.add('error');
    ele.nextElementSibling.textContent = ele.validationMessage;
  }
}

function validateFormControl(ele, validator) {
  validator(ele);
  toggleControlStatus(ele);
}

function validateFirstName(ele) {
  if (ele.validity.valueMissing) {
    ele.setCustomValidity('* First name is required.');
  } else if (ele.validity.patternMismatch) {
    ele.setCustomValidity('* First name must only contain letters.');
  } else if (ele.validity.tooShort) {
    ele.setCustomValidity('* First name must be at least 3 characters long.');
  } else {
    ele.setCustomValidity('');
  }
}

function validateLastName(ele) {
  if (ele.validity.valueMissing) {
    ele.setCustomValidity('* Last name is required.');
  } else if (ele.validity.patternMismatch) {
    ele.setCustomValidity('* Last name must only contain letters.');
  } else if (ele.validity.tooShort) {
    ele.setCustomValidity('* Last name must be at least 3 characters long.');
  } else {
    ele.setCustomValidity('');
  }
}

function validateEmail(ele) {
  if (ele.validity.valueMissing) {
    ele.setCustomValidity('* Email is required.');
  } else if (ele.validity.typeMismatch) {
    ele.setCustomValidity('* Email must be a valid email address.');
  } else {
    ele.setCustomValidity('');
  }
}

function validatePhone(ele) {
  if (ele.validity.valueMissing) {
    ele.setCustomValidity('* Phone is required.');
  } else if (ele.validity.patternMismatch) {
    ele.setCustomValidity('* Phone must only contain numbers.');
  } else if (ele.validity.tooShort || ele.validity.tooLong) {
    ele.setCustomValidity('* Phone must be 10 digits long.');
  } else {
    ele.setCustomValidity('');
  }
}

function validatePassword(ele) {
  if (ele.validity.valueMissing) {
    ele.setCustomValidity('* Password is required.');
  } else if (ele.validity.tooShort) {
    ele.setCustomValidity('* Password must be at least 3 characters long.');
  } else {
    ele.setCustomValidity('');
  }
}

function validateConfirmPassword(ele) {
  if (ele.validity.valueMissing) {
    ele.setCustomValidity('* Confirm password is required.');
  } else if (ele.value !== password.value) {
    ele.setCustomValidity('* Passwords do not match.');
  } else {
    ele.setCustomValidity('');
  }
}

firstName.addEventListener("input", () => {
  validateFormControl(firstName, validateFirstName);
})

lastName.addEventListener("input", () => {
  validateFormControl(lastName, validateLastName);
})

email.addEventListener("input", () => {
  validateFormControl(email, validateEmail);
})

phone.addEventListener("input", () => {
  validateFormControl(phone, validatePhone);
})

password.addEventListener("input", () => {
  validateFormControl(password, validatePassword);
})

confirmPassword.addEventListener("input", () => {
  validateFormControl(confirmPassword, validateConfirmPassword);
})

submitBtn.addEventListener("click", e => {
  if (!form.checkValidity()) {
    e.preventDefault();

    inputs.forEach(input => {
      const validator = input === firstName
        ? validateFirstName
        : input === lastName
          ? validateLastName
          : input === email
            ? validateEmail
            : input === phone
              ? validatePhone
              : input === password
                ? validatePassword
                : validateConfirmPassword

      validateFormControl(input, validator);
    })
  }
})
