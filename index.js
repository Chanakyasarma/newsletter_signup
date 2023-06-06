const card1 = document.querySelector('.main-container');
const card2 = document.querySelector('.sub-container');
const userEmail = document.querySelector('.email');
const displayEmail = document.querySelector('.user-email');
const error = document.querySelector('.error');

const form = document.querySelector('.form');
const emailInput = document.querySelector('.email');
const errorSpan = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        errorSpan.classList.remove('hide');
        userEmail.classList.add('error-box');
    } else {
        errorSpan.classList.add('hide');
        card1.classList.add('hide');
        card2.classList.remove('hide');
        displayEmail.textContent = email;
    }
});