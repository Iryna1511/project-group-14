import { createRequests } from './portfolio-api';

const form = document.querySelector(".footer-form");
const email = form.elements.email;
const comment = form.elements.comment;
const modal = document.querySelector(".modal");
const localStorageKey = "form-state";

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = {
        email: email.value,
        comment: comment.value,
    };

  try {
    createRequests(formData);
    modal.classList.add("is-open");
    email.value = '';
    comment.value = '';  
    console.log(formData);
    localStorage.removeItem(localStorageKey);
  } catch (error) {
    alert('Please fill all fields correctly');
    console.error('Error:', error.message);
    }
});

// Saving input in case of reloads
const savedData = JSON.parse(localStorage.getItem(localStorageKey));

email.value = (savedData && savedData.email) ? savedData.email : "";
comment.value = (savedData && savedData.comment) ? savedData.comment : "";

form.addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, JSON.stringify({
        email: email.value.trim(),
        comment: comment.value.trim(),
    }));
});


// Text overflow control (credit: solovyinapisnia)
const maxLength = 30;

email.addEventListener('input', limitAndEllipsis);
comment.addEventListener('input', limitAndEllipsis);


function limitAndEllipsis(event) {
    if (this.value.length > maxLength) {
        this.value = this.value.substring(0, maxLength)+'...'; 
    }
}