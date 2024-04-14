import { createRequests } from './portfolio-api';
import { openModal } from './modal';

const emailInput = document.getElementById('form-email');
const commentInput = document.getElementById('form-comment');
const form = document.getElementById('footer-form');
const maxLength = 50;

emailInput.addEventListener('input', limitAndEllipsis);
commentInput.addEventListener('input', limitAndEllipsis);

function limitAndEllipsis(event) {
    const input = event.target;
    if (input.value.length > maxLength) {
        input.value = input.value.substring(0, maxLength) + '...';
    }
}

function clearForm() {
    emailInput.value = '';
    commentInput.value = '';
}

function validateEmail(email) {
    const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
}

function sendFormData(email, comment) {
    const formData = {
        email: email,
        comment: comment
    };
    
    createRequests(formData)
        .then(response => {
            console.log('Response from server:', response);
            openModal();
            clearForm();
        })
        .catch(error => {
            console.error('Error sending request:', error);
            alert('Error sending request. Please try again.');
        });
}


function submitForm(event) {
    event.preventDefault(); 
    
    if (validateEmail(emailInput.value) && commentInput.value.trim() !== '') {
        sendFormData(emailInput.value, commentInput.value);
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        alert('Invalid email, try again.');
    }
}

form.addEventListener('submit', submitForm);