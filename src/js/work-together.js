import { openModal } from './modal';

const form = document.getElementById('footer-form');

function submitForm(event) {
    event.preventDefault();
    openModal();
}

form.addEventListener('submit', submitForm);