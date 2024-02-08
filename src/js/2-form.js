const formEl = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', event => {
  const { name, value } = event.target;
  const formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  formData[name] = value.trim();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
  const dataObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  new FormData(formEl).forEach((value, key) => {
    dataObj[key] = value;
  });
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formDataEl = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  console.log(formDataEl);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formEl.reset();
});
