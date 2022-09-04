import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};
const reset = () => {
  email.value = '';
  message.value = '';
  localStorage.removeItem(FEEDBACK_KEY);
};

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name = "email"]');
const message = document.querySelector('[name = "message"]');

if (localStorage.hasOwnProperty(FEEDBACK_KEY)) {
  const data = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  email.value = data.email;
  message.value = data.message;
}

form.addEventListener('submit', OnFormSubmit);
const timing = throttle(() => {
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}, 500);
form.addEventListener('input', timing);

function OnFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  reset();
}
