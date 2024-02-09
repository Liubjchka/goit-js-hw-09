const formEl = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const dataLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

if (dataLocalStorage) {
  formEl.elements.email.value = dataLocalStorage.email || '';
  formEl.elements.message.value = dataLocalStorage.message || '';
}

// Збереження даних при введенні у локальному сховищі
formEl.addEventListener('input', event => {
  const formDataEl = {
    email: formEl.elements.email.value.trim(),
    message: formEl.elements.message.value.trim(),
  };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formDataEl));
});

// Додавання слухача подій при сабміті форми
formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (
    formEl.elements.email.value === '' ||
    formEl.elements.message.value === ''
  ) {
    alert(`All form fields must be filled in`);
    return;
  }

  const formDataEl = {
    email: formEl.elements.email.value.trim(),
    message: formEl.elements.message.value.trim(),
  };

  // виведення даних в консоль перед видаленням
  console.log(formDataEl);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formEl.reset();
});
