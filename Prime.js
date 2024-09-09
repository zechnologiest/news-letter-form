// Get elements from the DOM
const emailInput = document.getElementById('email');
const subscribeButton = document.getElementById('subscribe');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
const signUpForm = document.querySelector('.Sign-up-form');

// Function to validate email format using regex
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Event listener for the Subscribe button
subscribeButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission for demo purposes

  const emailValue = emailInput.value;

  // Check if the email format is valid
  if (validateEmail(emailValue)) {
    // Hide error message, hide the sign-up form, and show success message
    errorMessage.style.visibility = 'hidden';
    emailInput.classList.remove('error'); // Remove error class (red border)
    signUpForm.style.display = 'none'; // Hide the sign-up form
    successMessage.style.visibility = 'visible';
    successMessage.style.opacity = '1'; // Ensure success message is visible
    successMessage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#FF6A3A" />
            <stop offset="100%" stop-color="#FF527B" />
          </linearGradient>
        </defs>
        <g fill="none">
          <circle cx="32" cy="32" r="32" fill="url(#a)" />
          <path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285" />
        </g>
      </svg>
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <b>${emailValue}</b>. Please check your inbox.</p>
      <button class="dismiss" type="button"><b>Dismiss</b></button>
    `;

    // Attach event listener to the dismiss button after it is added to the DOM
    const dismissButton = document.querySelector('.dismiss');
    dismissButton.addEventListener('click', function () {
      // Hide the success message smoothly
      successMessage.style.opacity = '0'; // Start fading out
      successMessage.style.transition = 'opacity 0.3s ease'; // Smooth fade

      // After transition, reset visibility and other properties
      setTimeout(() => {
        successMessage.style.visibility = 'hidden'; // Hide success message
        successMessage.style.opacity = '1'; // Reset opacity for future displays
        emailInput.value = ''; // Optionally clear the email input field
        signUpForm.style.display = 'flex'; // Show the sign-up form again
      }, 300); // Wait for the fade-out transition to complete
    });
  } else {
    // Show error message under the input field
    errorMessage.style.visibility = 'visible';
    emailInput.classList.add('error'); // Add error class for red border
  }
});
