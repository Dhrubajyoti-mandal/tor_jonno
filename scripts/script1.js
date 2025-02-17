const letsGoButton = document.getElementById('letsGoButton');

letsGoButton.addEventListener('click', () => {
  // Add a click animation
  letsGoButton.style.animation = 'buttonClick 0.3s ease';

  // Redirect to another page after the animation
  setTimeout(() => {
    window.location.href = 'page2.html'; // Change this to your desired page
  }, 300); // Wait for the animation to finish
});