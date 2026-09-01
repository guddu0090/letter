/**
 * Background Music Control
 * Handles play/pause functionality for the background music
 */

document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bgMusic');
  const musicIcon = document.getElementById('musicIcon');

  // Try to autoplay on page load
  audio.play().catch(() => {
    // If autoplay fails due to browser policies, clicking the icon will trigger it
    console.log('Autoplay prevented by browser. Click the music icon to play.');
  });

  // Music icon click handler - toggle between play and pause
  musicIcon.addEventListener('click', function() {
    if (audio.paused) {
      // Play the audio
      audio.play().catch(error => {
        console.log('Play error:', error);
      });
    } else {
      // Pause the audio
      audio.pause();
    }
  });
});
