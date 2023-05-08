// contentScript.js

function removeAutoModeratorDivs() {
    const autoModeratorLinks = document.querySelectorAll('a.author');
  
    autoModeratorLinks.forEach((link) => {
      if (link.textContent === 'AutoModerator') {
        const grandparentDiv = link.parentElement.parentElement;
        grandparentDiv.remove();
      }
    });
  }
  
  function observeDOMChanges() {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          removeAutoModeratorDivs();
        }
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  // Wait for the DOMContentLoaded event before setting up the MutationObserver
  document.addEventListener('DOMContentLoaded', () => {
    observeDOMChanges();
  });
  