// Get all input fields and error message element
const form = document.getElementById('form');
const firstnameInput = document.getElementById('firstname-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeat-password-input');
const errorMessage = document.getElementById('error-message');

// Function to validate form fields
function validateFormFields(fields) {
  const errors = [];

  fields.forEach((field) => {
    if (field.value.trim() === '') {
      errors.push(`${field.name} is required`);
      field.parentElement.classList.add('incorrect');
    }
  });

  return errors;
}

// Function to validate password
function validatePassword(password, repeatPassword) {
  const errors = [];

  if (password.length < 8) {
    errors.push('Password must have at least 8 characters');
    passwordInput.parentElement.classList.add('incorrect');
  }

  if (password !== repeatPassword) {
    errors.push('Password does not match repeated password');
    passwordInput.parentElement.classList.add('incorrect');
    repeatPasswordInput.parentElement.classList.add('incorrect');
  }

  return errors;
}

// Function to validate email
function validateEmail(email) {
  const errors = [];

  if (email.trim() === '') {
    errors.push('Email is required');
    emailInput.parentElement.classList.add('incorrect');
  }

  return errors;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const fields = [firstnameInput, emailInput, passwordInput, repeatPasswordInput].filter((input) => input !== null);

  let errors = [];

  if (firstnameInput) {
    // Validate signup form fields
    errors = [...validateFormFields(fields), ...validatePassword(passwordInput.value, repeatPasswordInput.value)];
  } else {
    // Validate login form fields
    errors = [...validateFormFields([emailInput, passwordInput]), ...validateEmail(emailInput.value)];
  }

  if (errors.length > 0) {
    errorMessage.innerText = errors.join('. ');
  } else {
    // Form is valid, submit it
    alert('Form submitted successfully!');
    window.location.assign('login.html');
  }
}

// Add event listener to form submission
form.addEventListener('submit', handleSubmit);

// Add event listener to input fields to remove error message on input
[firstnameInput, emailInput, passwordInput, repeatPasswordInput].forEach((input) => {
  input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect');
      errorMessage.innerText = '';
    }
  });
});