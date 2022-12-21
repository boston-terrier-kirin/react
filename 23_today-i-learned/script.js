const factForm = document.querySelector('.fact-form');
const openBtn = document.querySelector('.btn-open');

openBtn.addEventListener('click', () => {
  if (factForm.classList.contains('hidden')) {
    openBtn.innerHTML = 'Close';
  } else {
    openBtn.innerHTML = 'Share a fact';
  }

  factForm.classList.toggle('hidden');
});
