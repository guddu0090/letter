/**
 * Background Music Control
 * Handles play/pause functionality for the background music
 * Enhanced for mobile autoplay support
 */

let autoplayAttempted = false;

function attemptAutoplay() {
  const audio = document.getElementById('bgMusic');
  if (audio && !autoplayAttempted) {
    autoplayAttempted = true;
    audio.play().catch(() => {
      console.log('Autoplay prevented by browser policy.');
    });
  }
}

// Try autoplay when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bgMusic');
  const musicIcon = document.getElementById('musicIcon');

  // Attempt autoplay
  attemptAutoplay();

  // Setup music icon click handler - toggle between play and pause
  if (musicIcon) {
    musicIcon.addEventListener('click', function() {
      if (audio.paused) {
        audio.play().catch(error => {
          console.log('Play error:', error);
        });
      } else {
        audio.pause();
      }
    });
  }
});

// Autoplay on first user interaction (helps on mobile)
document.addEventListener('click', function() {
  attemptAutoplay();
}, { once: true });

document.addEventListener('touchstart', function() {
  attemptAutoplay();
}, { once: true });

// Try autoplay when page becomes visible
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    attemptAutoplay();
  }
});
