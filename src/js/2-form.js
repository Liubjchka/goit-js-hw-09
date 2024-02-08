// document.addEventListener('DOMContentLoaded', () => {
//   const loginFormEl = document.querySelector('.login-form');

//   const emailValueEl = loginFormEl.elements.email.value.trim();
//   const passwordValueEl = loginFormEl.elements.password.value.trim();
//   if (emailValueEl === '' || passwordValueEl === '') {
//     alert(`All form fields must be filled in`);
//     return;
//   }

//   const formDataEl = { email: emailValueEl, password: passwordValueEl };
//   console.log(formDataEl);
//   loginFormEl.reset();
// });

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onFormSubmit);

// Збираємо об'єкти в масив
function onFormSubmit(event) {
  event.preventDefault();
  const dataObj = {};
  new FormData(formEl).forEach((value, key) => {
    dataObj[key] = value;
  });

  const array = JSON.parse(localStorage.getItem('feedback-form-state')) || [];
  //   array.push(dataObj);
  localStorage.setItem('feedback-form-state', JSON.stringify(array));
}

// Перевіряємо, чи всі поля форми заповнені,
// і виводиться сповіщення, якщо хоча б одне з полів порожнє
const emailValueEl = formEl.elements.email.value.trim();
const messageValueEl = formEl.elements.message.value.trim();
if (emailValueEl === '' || messageValueEl === '') {
  alert(`All form fields must be filled in`);
}

const formDataEl = { email: emailValueEl, message: messageValueEl };
console.log(formDataEl);
formEl.reset();

// hhhhhhhh
// const LOCAL_STORAGE_KEY = 'tasks';

// function addTask(dataObj) {
//   const array = getAllTasks();
//   array.push(dataObj);
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(array));
// }

// function getAllTasks() {
//   return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
// }

// export const localStorageAPI = {
//   addTask,
//   getAllTasks,
// };
