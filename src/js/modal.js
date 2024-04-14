export function openModal() {
    document.querySelector('.backdrop').classList.add('active');
    document.querySelector('.modal').classList.add('active');
    document.addEventListener('keydown', closeModalOnEscape);
    document.querySelector('.backdrop').addEventListener('click', closeModalOnEscape)
}

function closeModal() {
    document.querySelector('.backdrop').classList.remove('active');
    document.querySelector('.modal').classList.remove('active');
    document.removeEventListener('keydown', closeModalOnEscape);
    document.querySelector('.backdrop').removeEventListener('click', closeModalOnEscape)
}

function closeModalOnClick(event) {
    if (event.target.classList.contains('modal-close-button')) {
        closeModal();
    }
}

function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

document.querySelector('.modal-close-button').addEventListener('click', closeModal);

document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.classList.contains('backdrop')) {
        closeModal();
    }
});