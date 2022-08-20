import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';

// const STORAGE_MESSAGEKEY = 'message';
// const STORAGE_EMAILKEY = 'email';
const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmailEl: document.querySelector('.feedback-form input'),
    textAreaEl: document.querySelector('.feedback-form textarea'),
  };


refs.form.addEventListener("submit", onFormSubmit)
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

let formData = {};


function onFormSubmit(evt) {
  evt.preventDefault();

     if (refs.inputEmailEl.value === '' || refs.textAreaEl.value === '') {
        return window.alert("All fields must be filled!");     
    }

  evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData)
}


function onTextareaInput(evt) {
     formData = {
        email: refs.inputEmailEl.value,
        message: refs.textAreaEl.value,
}
    

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function populateTextarea() {
    const savedText = localStorage.getItem(STORAGE_KEY);
    
    if (savedText) {
        refs.inputEmailEl.value = JSON.parse(savedText).email;
        refs.textAreaEl.value = JSON.parse(savedText).message;
    }
    
}

