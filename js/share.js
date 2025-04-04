// Select all elements with the class 'copyButton'
document.querySelectorAll('.copyButton').forEach(function(button) {
  button.addEventListener('click', function() {
   // alert();
    // Get the current page URL
    var currentURL = window.location.href;

    // Try using the Clipboard API for a modern approach
    navigator.clipboard.writeText(currentURL).then(function() {
      // Select the element with the class 'message' (assuming you have one message element)
      var messageElement = document.querySelector('.message');

      // Display success message
      messageElement.textContent = 'URL copied to clipboard!';
      messageElement.classList = 'message padding';

      // Optional: Clear the success message after 3 seconds
      setTimeout(function() {
        messageElement.textContent = '';
        messageElement.classList = 'message';
      }, 3000);
    }).catch(function(error) {
      // Handle error if clipboard operation fails
      console.error('Failed to copy text: ', error);
    });
  });
});