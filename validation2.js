const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');

// Add an event listener to the form for submission
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the email and password input values
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;

  // Validate the email and password
  if (email === '' || password === '') {
    errorMessage.textContent = 'Please enter both email and password.';
  } else {
    // Validate the email and password
if (email === '' || password === '') {
    errorMessage.textContent = 'Please enter both email and password.';
  } else {
    
  
    // Redirect to the main page
    window.location.href = 'front.html';
  }
  }
});