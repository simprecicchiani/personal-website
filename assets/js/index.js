const resumeButton = document.querySelector('#resume')
const modalBg = document.querySelector('.modal-background')
const modal = document.querySelector('.modal')

resumeButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});
