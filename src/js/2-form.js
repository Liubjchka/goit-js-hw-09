const formEl = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', event => {
  const { name, value } = event.target;
  const formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  formData[name] = value.trim();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));

  const allFieldsFilled = Array.from(formEl.elements).every(
    field => field.value.trim() !== ''
  );

  if (allFieldsFilled) {
    formEl.querySelector('button').removeAttribute('disabled');
  } else {
    formEl.querySelector('button').setAttribute('disabled', 'disabled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dataObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  new FormData(formEl).forEach((value, key) => {
    dataObj[key] = value;
  });
  const allFieldsFilled = Array.from(formEl.elements).every(
    field => field.value.trim() !== ''
  );

  if (allFieldsFilled) {
    formEl.querySelector('button').removeAttribute('disabled');
  } else {
    formEl.querySelector('button').setAttribute('disabled', 'disabled');
  }
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formDataEl = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  console.log(formDataEl);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formEl.reset();
  formEl.querySelector('button').setAttribute('disabled', 'disabled');
});
