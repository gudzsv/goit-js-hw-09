const formState = 'feedback-form-state';
const from = document.querySelector('.feedback-form');
const formEmail = document.querySelector('[name="email"]');
const formMessage = document.querySelector('[name="message"]');

//** get local storage data
const localState = JSON.parse(localStorage.getItem(formState));
if (localState) {
  //** fill form fields from local storage
  for (const key of Object.keys(localState)) {
    document.querySelector(`[name="${key}"]`).value = localState[key] ?? '';
  }
}

//** event to fill in form state object **//
from.addEventListener('input', saveToLocalStorage);

//** save form form data to local storage **//
from.addEventListener('submit', event => {
  event.preventDefault();

  if (validateForm(event)) {
    //** according requirement of Homework 9
    console.log('submit', localState);

    localStorage.removeItem(formState);
    event.target.reset();
  }
});

function saveToLocalStorage(event) {
  const formStateData = {
    email: localState?.email || '',
    message: localState?.message || '',
  };
  formStateData[event.target.name] = event.target.value.trim();
  localStorage.setItem(formState, JSON.stringify(formStateData));
}

function validateForm() {
  let isValid = true;
  if (!formEmail.value) {
    showError(formEmail);
    isValid = false;
  }
  if (!formMessage.value) {
    showError(formMessage);
    isValid = false;
  } else if (formMessage.value || formEmail.value) {
    if (formEmail.value) {
      showSuccess(formEmail);
    }
    if (formMessage.value) {
      showSuccess(formMessage);
    }
    if (formEmail.value && formMessage.value) {
      isValid = true;
    }
  }
  return isValid;
}

function showError(input) {
  input.classList.add('error');
}

function showSuccess(input) {
  input.classList.remove('error');
}
