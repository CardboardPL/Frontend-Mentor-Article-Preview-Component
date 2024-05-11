const shareBtn = document.querySelector('.share-btn');
const sharePopup = document.querySelector('.share-popup');

function toggleVisibility(element) {
  element.classList.toggle('hidden');
}

shareBtn.onclick = () => {
  toggleVisibility(sharePopup);
  shareBtn.setAttribute('data-active', shareBtn.getAttribute('data-active') !== 'true');
  sharePopup.setAttribute('aria-hidden', sharePopup.getAttribute('aria-hidden') !== 'true');
}