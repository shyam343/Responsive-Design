function toggleMobileMenu(icon) {
    icon.classList.toggle("open");
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  }
  
  // Ensure mobile menu is hidden on resize to larger screens
  window.addEventListener('resize', () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const desktopMenu = document.querySelector(".desktop-menu");
  
    if (window.innerWidth > 1024) {
      mobileMenu.style.display = "none";
      desktopMenu.style.display = "flex";
    } else {
      desktopMenu.style.display = "none";
    }

  
// Handle user message submission
document.getElementById('chatbot-send').addEventListener('click', async () => {
  const inputField = document.getElementById('chatbot-input');
  const message = inputField.value.trim();

  if (message === '') return;

  // Display user message in the chat
  displayMessage(message, 'user');

  // Clear input field
  inputField.value = '';

  // Send the message to OpenAI
  try {
    const response = await fetch('/.netlify/functions/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    displayMessage(data.reply, 'bot');
  } catch (error) {
    displayMessage('Error! Please try again.', 'bot');
  }
});

// Display the message in the chat window
function displayMessage(message, role) {
  const messageContainer = document.createElement('div');
  messageContainer.className = `chatbot-message ${role}`;
  messageContainer.innerText = message;
  document.getElementById('chatbot-messages').appendChild(messageContainer);
}

  });
  