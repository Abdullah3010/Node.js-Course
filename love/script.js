function showLove() {
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.innerText = 'I love you, [Your Girlfriend\'s Name]!';
  }
  
  // Function to create falling hearts
  function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(heart);
  
    // Remove the heart from the DOM once it falls off the screen
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // Create falling hearts every 0.5 seconds
  setInterval(createFallingHeart, 500);
  