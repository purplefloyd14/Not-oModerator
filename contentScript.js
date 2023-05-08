// contentScript.js

function removeAutoModeratorDivs() {
  const autoModeratorLinks = document.querySelectorAll('a.author.moderator');

  autoModeratorLinks.forEach((link) => {
    if (link.textContent.toLowerCase().includes('mod') || link.textContent.toLowerCase().includes('bot') || link.textContent.toLowerCase().includes('vote')) {
      const grandparentDiv = link.parentElement.parentElement.parentElement;
      grandparentDiv.remove();
    }
  });
}

removeAutoModeratorDivs();