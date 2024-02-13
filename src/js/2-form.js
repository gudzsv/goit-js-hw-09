const formState = 'feedback-form-state';
const from = document.querySelector('.feedback-form');

// get local storage data
const localState = JSON.parse(localStorage.getItem(formState));

if (localState) {
  // fill form fields from local storage
  for (const key of Object.keys(localState)) {
    document.querySelector(`[name="${key}"]`).value = localState[key];
  }
}

// event to fill in form state object **//
from.addEventListener('input', onInputSaveToLocalStorage);

// save form form data to local storage **//
from.addEventListener('submit', onSubmitForm);

function onInputSaveToLocalStorage(event) {
  const key = event.target.name;
  const updatedStorage = {
    ...JSON.parse(localStorage.getItem(formState)),
    [key]: event.target.value.trim(),
  };

  localStorage.setItem(formState, JSON.stringify(updatedStorage));
}

function onSubmitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formDataObj = Object.fromEntries(formData.entries());

  if (validateFormFields(formDataObj)) {
    // according requirement of Homework 9
    console.log('submit', formDataObj);

    localStorage.removeItem(formState);

    event.target.reset();
  }
}

function validateFormFields(formDataObj) {
  let isValid = true;
  for (const key in formDataObj) {
    if (!formDataObj[key]) {
      addError(document.querySelector(`[name="${key}"]`));
      isValid = false;
    }
    if (formDataObj[key]) {
      removeError(document.querySelector(`[name="${key}"]`));
    }
  }

  return isValid;
}

function addError(input) {
  input.classList.add('error');
}

function removeError(input) {
  input.classList.remove('error');
}
