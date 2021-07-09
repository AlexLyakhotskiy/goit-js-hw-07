const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputChange);

function inputChange({ currentTarget: { value } }) {
  outputEl.textContent = value.length === 0 ? 'незнакомец' : value;
}
