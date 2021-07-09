const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (+inputEl.dataset.length === event.currentTarget.value.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
